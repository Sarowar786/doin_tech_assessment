"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface TermsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  control?: any;
  setValue?: any;
}

export default function TermsDialog({
  open,
  onOpenChange,
  setValue,
}: TermsDialogProps) {
  const handleAccept = () => {
    if (setValue) {
      setValue("isAgree", true);
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Terms & Conditions</DialogTitle>
        </DialogHeader>
        <div className="text-sm text-gray-600 max-h-60 overflow-y-auto space-y-2 py-2">
          <p>Welcome to ByteSpace! By signing up, you agree to our terms of service and privacy policy.</p>
          <p>You agree to provide accurate information and respect the community guidelines when participating in our learning platform.</p>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button onClick={handleAccept}>
            I Agree
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
