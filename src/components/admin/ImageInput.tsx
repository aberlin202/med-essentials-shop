import { useRef, useState } from "react";
import { Upload } from "lucide-react";
import { toast } from "sonner";
import { uploadImageFile } from "@/lib/uploadImage";
import { getImageUrl, isLikelyImageUrl } from "@/lib/getImageUrl";

export function ImageInput({
  value,
  onChange,
  folder,
  label = "Image",
}: {
  value: string;
  onChange: (url: string) => void;
  folder: string;
  label?: string;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const invalid = value.trim().length > 0 && !isLikelyImageUrl(value.trim());

  async function onUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    setUploading(true);
    try {
      const url = await uploadImageFile(f, folder);
      onChange(url);
      toast.success("Image uploaded");
    } catch (err: any) {
      toast.error(err?.message ?? "Upload failed");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  return (
    <div>
      <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-1.5 grid gap-2 sm:grid-cols-[1fr_auto]">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Image URL"
          className={`h-10 rounded-md border bg-background px-3 text-sm ${
            invalid ? "border-destructive" : "border-border"
          }`}
        />
        <label className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-md border border-border px-3 text-sm hover:bg-accent">
          <Upload className="h-4 w-4" />
          {uploading ? "Uploading…" : "Upload"}
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onUpload}
          />
        </label>
      </div>
      {invalid && (
        <p className="mt-1 text-xs text-destructive">
          This doesn’t look like a direct image URL. Use a Firebase Storage link or a URL ending in .jpg/.png/.webp, or upload a file.
        </p>
      )}
      {value && !invalid && (
        <img
          src={getImageUrl(value, { w: 192 })}
          alt=""
          className="mt-2 h-24 w-24 rounded-md border border-border object-cover"
        />
      )}
    </div>
  );
}