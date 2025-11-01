"use client";

import { Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { useState } from "react";
import { toast } from "sonner";

const EmptyUpload = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  return (
    <Empty className="border border-dashed text-primary mb-16">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Cloud />
        </EmptyMedia>
        <EmptyTitle>No file Selected!</EmptyTitle>
        <EmptyDescription>
          Upload Your Dataset to storage to access them anywhere.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        {!isUploaded ? (
          <Button onClick={()=>toast.info("Coming Soon!")} className="cursor-pointer" size="lg">
            Select File
          </Button>
        ) : (
          <Button  onClick={()=>setIsUploaded(!isUploaded)} className="cursor-pointer" size="sm">
            Upload File
          </Button>
        )}
      </EmptyContent>
    </Empty>
  );
};

export default EmptyUpload;
