"use client"

import { useDropzone } from "react-dropzone"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { PictureInPicture } from "lucide-react"
import { FileText } from "lucide-react"
import { FileSpreadsheet } from "lucide-react"
import { Archive } from "lucide-react"
import { File } from "lucide-react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function FileDropBox({ files, setFiles }) {
  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles)
  }
  console.log(files)

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const handleRemove = (name) => {
    setFiles((prev) => prev.filter((file) => file.name !== name));
  };

  return (
    <div className="space-y-4">
      {/* Dropzone */}
      <Card 
        {...getRootProps()} 
        className={`cursor-pointer border-dashed border-2 p-6 text-center transition flex items-center justify-center h-[20vh]
        ${isDragActive ? "border-primary bg-primary/10" : "border-muted"}`}
      >
        <input {...getInputProps()} />
        <div>
          {isDragActive ? (
            <p className="text-primary font-medium">Drop files here ✨</p>
          ) : (
            <p className="text-muted-foreground">Drag & drop files, or click to upload</p>
          )}
        </div>
      </Card>

      {/* Preview */}
      {files.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {files.map((file) => {
            const ext = file.name.split(".").pop().toLowerCase();

            // pick icon by file type
            const renderPreview = () => {
              if (file.type.startsWith("image/")) {
                return (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="mx-auto max-h-40 object-contain rounded-md"
                  />
                );
              }

              if (file.type.startsWith("video/")) {
                return (
                  <video
                    src={URL.createObjectURL(file)}
                    controls
                    className="mx-auto max-h-40 rounded-md"
                  />
                );
              }

              if (file.type === "application/pdf") {
                return <FileText className="mx-auto text-red-500" size={50} />;
              }

              if (["doc", "docx"].includes(ext)) {
                return <FileText className="mx-auto text-blue-500" size={50} />;
              }

              if (["xls", "xlsx"].includes(ext)) {
                return <FileSpreadsheet className="mx-auto text-green-500" size={50} />;
              }

              if (["zip", "rar"].includes(ext)) {
                return <Archive className="mx-auto text-yellow-500" size={50} />;
              }

              return <File className="mx-auto text-muted-foreground" size={50} />;
            };

            return (
              <Card key={file.path} className={'relative'}>
                <Button
                size={'icon'}
                variant={'outline'}
                className={'absolute top-2 right-2'}
                onClick={() => handleRemove(file.name)}
              >
                <X size={14} />
              </Button>
                <CardHeader className="space-y-1">
                  <p className="font-medium truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {(file.size / 1024).toFixed(1)} KB • {ext}
                  </p>
                </CardHeader>
                <CardContent>{renderPreview()}</CardContent>
              </Card>
            );
          })}
        </div>
      )}

    </div>
  )
}
