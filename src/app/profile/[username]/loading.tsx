import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HomeIcon, ArrowLeftIcon, Loader2Icon, LoaderCircle } from "lucide-react";

export default function loading() {
  return (
    <div className="min-h-[80vh] grid place-items-center px-4">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <div className="text-center space-y-6">
            {/* LARGE 404 TEXT */}
            <p className="text-4xl font-bold text-primary font-mono">Loading...</p>
            
          </div>
        </CardContent>
      </Card>
    </div>
  );
}