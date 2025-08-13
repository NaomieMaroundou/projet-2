"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Video, Mic, Upload, X, Square } from "lucide-react"

interface MediaFile {
  id: string
  type: "photo" | "video" | "audio"
  url: string
  name: string
  size: number
}

export function MediaCapture() {
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([])
  const [isRecording, setIsRecording] = useState(false)
  const [recordingType, setRecordingType] = useState<"video" | "audio" | null>(null)
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Capture photo avec la caméra
  const capturePhoto = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.play()

        // Attendre que la vidéo soit prête
        videoRef.current.onloadedmetadata = () => {
          if (canvasRef.current && videoRef.current) {
            const canvas = canvasRef.current
            const video = videoRef.current

            canvas.width = video.videoWidth
            canvas.height = video.videoHeight

            const ctx = canvas.getContext("2d")
            if (ctx) {
              ctx.drawImage(video, 0, 0)

              canvas.toBlob(
                (blob) => {
                  if (blob) {
                    const url = URL.createObjectURL(blob)
                    const newFile: MediaFile = {
                      id: Date.now().toString(),
                      type: "photo",
                      url,
                      name: `photo_${Date.now()}.jpg`,
                      size: blob.size,
                    }
                    setMediaFiles((prev) => [...prev, newFile])
                  }
                },
                "image/jpeg",
                0.8,
              )
            }
          }

          // Arrêter le stream
          stream.getTracks().forEach((track) => track.stop())
        }
      }
    } catch (error) {
      console.error("Erreur lors de la capture photo:", error)
      alert("Impossible d'accéder à la caméra. Vérifiez les permissions.")
    }
  }

  // Démarrer l'enregistrement vidéo/audio
  const startRecording = async (type: "video" | "audio") => {
    try {
      const constraints = type === "video" ? { video: true, audio: true } : { audio: true }

      const stream = await navigator.mediaDevices.getUserMedia(constraints)
      const recorder = new MediaRecorder(stream)
      const chunks: BlobPart[] = []

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data)
        }
      }

      recorder.onstop = () => {
        const blob = new Blob(chunks, {
          type: type === "video" ? "video/webm" : "audio/webm",
        })
        const url = URL.createObjectURL(blob)

        const newFile: MediaFile = {
          id: Date.now().toString(),
          type: type === "video" ? "video" : "audio",
          url,
          name: `${type}_${Date.now()}.webm`,
          size: blob.size,
        }

        setMediaFiles((prev) => [...prev, newFile])

        // Arrêter le stream
        stream.getTracks().forEach((track) => track.stop())
      }

      recorder.start()
      setMediaRecorder(recorder)
      setIsRecording(true)
      setRecordingType(type)
    } catch (error) {
      console.error(`Erreur lors de l'enregistrement ${type}:`, error)
      alert(
        `Impossible d'accéder au ${type === "video" ? "caméra/microphone" : "microphone"}. Vérifiez les permissions.`,
      )
    }
  }

  // Arrêter l'enregistrement
  const stopRecording = () => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop()
      setMediaRecorder(null)
      setIsRecording(false)
      setRecordingType(null)
    }
  }

  // Upload de fichiers
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return

    Array.from(files).forEach((file) => {
      const url = URL.createObjectURL(file)
      let type: "photo" | "video" | "audio" = "photo"

      if (file.type.startsWith("video/")) type = "video"
      else if (file.type.startsWith("audio/")) type = "audio"

      const newFile: MediaFile = {
        id: Date.now().toString() + Math.random().toString(),
        type,
        url,
        name: file.name,
        size: file.size,
      }

      setMediaFiles((prev) => [...prev, newFile])
    })

    // Reset input
    event.target.value = ""
  }

  // Supprimer un fichier
  const removeFile = (id: string) => {
    setMediaFiles((prev) => {
      const fileToRemove = prev.find((f) => f.id === id)
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.url)
      }
      return prev.filter((f) => f.id !== id)
    })
  }

  // Formater la taille du fichier
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="space-y-4">
      {/* Boutons de capture */}
      <div className="grid grid-cols-3 gap-2">
        <Button
          variant="outline"
          className="h-20 flex-col bg-transparent"
          onClick={capturePhoto}
          disabled={isRecording}
        >
          <Camera className="w-6 h-6 mb-1" />
          <span className="text-xs">Photo</span>
        </Button>

        <Button
          variant="outline"
          className="h-20 flex-col bg-transparent"
          onClick={() => (isRecording && recordingType === "video" ? stopRecording() : startRecording("video"))}
        >
          {isRecording && recordingType === "video" ? (
            <>
              <Square className="w-6 h-6 mb-1 text-red-500" />
              <span className="text-xs text-red-500">Arrêter</span>
            </>
          ) : (
            <>
              <Video className="w-6 h-6 mb-1" />
              <span className="text-xs">Vidéo</span>
            </>
          )}
        </Button>

        <Button
          variant="outline"
          className="h-20 flex-col bg-transparent"
          onClick={() => (isRecording && recordingType === "audio" ? stopRecording() : startRecording("audio"))}
        >
          {isRecording && recordingType === "audio" ? (
            <>
              <Square className="w-6 h-6 mb-1 text-red-500" />
              <span className="text-xs text-red-500">Arrêter</span>
            </>
          ) : (
            <>
              <Mic className="w-6 h-6 mb-1" />
              <span className="text-xs">Audio</span>
            </>
          )}
        </Button>
      </div>

      {/* Upload de fichiers */}
      <div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,video/*,audio/*"
          onChange={handleFileUpload}
          className="hidden"
        />
        <Button
          variant="outline"
          className="w-full bg-transparent"
          onClick={() => fileInputRef.current?.click()}
          disabled={isRecording}
        >
          <Upload className="w-4 h-4 mr-2" />
          Télécharger des fichiers
        </Button>
      </div>

      {/* Indicateur d'enregistrement */}
      {isRecording && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm text-red-700">
                Enregistrement {recordingType === "video" ? "vidéo" : "audio"} en cours...
              </span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Liste des fichiers capturés */}
      {mediaFiles.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-stone-700">Fichiers ajoutés ({mediaFiles.length})</h4>
          {mediaFiles.map((file) => (
            <Card key={file.id} className="border-stone-200">
              <CardContent className="p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {file.type === "photo" && (
                      <img
                        src={file.url || "/placeholder.svg"}
                        alt="Aperçu"
                        className="w-12 h-12 object-cover rounded"
                      />
                    )}
                    {file.type === "video" && <video src={file.url} className="w-12 h-12 object-cover rounded" muted />}
                    {file.type === "audio" && (
                      <div className="w-12 h-12 bg-stone-100 rounded flex items-center justify-center">
                        <Mic className="w-6 h-6 text-stone-500" />
                      </div>
                    )}

                    <div>
                      <div className="text-sm font-medium text-stone-800">{file.name}</div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {file.type}
                        </Badge>
                        <span className="text-xs text-stone-500">{formatFileSize(file.size)}</span>
                      </div>
                    </div>
                  </div>

                  <Button variant="ghost" size="sm" onClick={() => removeFile(file.id)}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                {/* Lecteur pour audio/vidéo */}
                {file.type === "audio" && (
                  <audio controls className="w-full mt-2">
                    <source src={file.url} type="audio/webm" />
                  </audio>
                )}
                {file.type === "video" && (
                  <video controls className="w-full mt-2 max-h-32">
                    <source src={file.url} type="video/webm" />
                  </video>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Éléments cachés pour la capture */}
      <video ref={videoRef} className="hidden" />
      <canvas ref={canvasRef} className="hidden" />
    </div>
  )
}
