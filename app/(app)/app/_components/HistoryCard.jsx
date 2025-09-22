'use client'
import { Button } from '@/components/ui/button'
import { Card, CardFooter, CardHeader } from '@/components/ui/card'
import { deleteData } from '@/hooks/firebase_actions/daleteData'
import { Trash, File, Clock, Database, FileText, Loader } from 'lucide-react'
import React from 'react'

export default function HistoryCard({ data }) {
  const [loading, setLoading] = React.useState(false)
  
  const deleteFile = async () => {
    setLoading(true)
    try {
      await deleteData(data.id, 'deletes', data.uploadedBy)
    } catch (error) {
      console.error('Delete error:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const formatFileType = (type) => {
    if (!type) return 'Unknown'
    return type.split('/')[1]?.toUpperCase() || type
  }

  return (
    <Card className="group hover:shadow-md transition-all duration-300 border-l-4 border-l-primary/20">
      <CardHeader className="pb-3 line-clamp-6">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-lg truncate" title={data.name}>
              {data.name}
            </p>
            <div className="space-y-1 mt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Deleted: {new Date(data.createdAt?.seconds * 1000).toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Database className="h-4 w-4" />
                <span>Size: {formatFileSize(data.size)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <File className="h-4 w-4" />
                <span>Type: {formatFileType(data.type)}</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardFooter className="pt-0 flex justify-end">
        <Button 
          onClick={deleteFile} 
          disabled={loading} 
          size="sm" 
          variant="outline" 
          className="gap-2 transition-all group-hover:bg-destructive/10 group-hover:border-destructive/20"
        >
          {loading ? (
            <>
              <Loader className="h-4 w-4 animate-spin" />
              Deleting...
            </>
          ) : (
            <>
              <Trash className="h-4 w-4" />
              Delete Again
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}