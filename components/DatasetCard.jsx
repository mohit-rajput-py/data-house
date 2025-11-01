"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, Download, Globe, Lock } from "lucide-react";
 
export default function DatasetCard({
  name = "Customer Sales Data",
  records = 1200, 
  size = "2.4 MB",        
  url="",
  type = "CSV",
  visibility = "public", 
  date = "Oct 28, 2025",
}) {  
  const handleDownload = ()=>{
    navigator.clipboard.writeText(url)
    alert("CDN copied, Use anywhere to download or direct use!")
  }
  return (
    <Card className="w-full rounded-2xl shadow-sm hover:shadow-md transition-all border border-muted/30">
      <CardHeader className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-primary truncate">
            {name}
          </CardTitle>
          {visibility === "public" ? (
            <Globe className="w-4 h-4 ml-2 text-gray-500" />
          ) : (
            <Lock className="w-4 h-4 ml-2 text-gray-500" />
          )}
        </div>
        <p className="text-sm text-muted-foreground">{records} records</p>
      </CardHeader>

      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Database className="w-4 h-4" /> {type} • {size}
        </div>
        <div className="flex items-center gap-2">
          {/* <Badge variant="outline" className="capitalize">
            {visibility}
          </Badge> */}
          <Badge>{date}</Badge>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <Button className="cursor-pointer" variant="secondary" size="sm">
          Preview
        </Button>
        <Button onClick={handleDownload} className="cursor-pointer" size="sm">
          <Download className="w-4 h-4 mr-1" /> Use / Get
        </Button>
      </CardFooter>
    </Card>
  );
}
