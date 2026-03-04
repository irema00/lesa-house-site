import { site } from "@/app/content/site";

export function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="text-sm text-black/60">{site.footer.copyright}</p>
      </div>
    </footer>
  );
}
