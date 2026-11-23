import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { Download, QrCode, Share2 } from "lucide-react";
import { getPublicInvitationUrl } from "../utils/publicUrl";

export function QRCodeSection() {
  const [qr, setQr] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const url = getPublicInvitationUrl();

  useEffect(() => {
    let active = true;
    if (!url) {
      setQr(null);
      return () => { active = false; };
    }
    QRCode.toDataURL(url, {
      errorCorrectionLevel: "H",
      margin: 4,
      width: 720,
      color: { dark: "#59352D", light: "#FFFFFF" },
    }).then((dataUrl) => {
      if (active) setQr(dataUrl);
    }).catch(() => {
      if (active) setError("We couldn't create the QR code. Please refresh and try again.");
    });
    return () => { active = false; };
  }, [url]);

  const download = () => {
    if (!qr) return;
    const link = document.createElement("a");
    link.href = qr;
    link.download = "amit-peul-wedding-invitation-qr.png";
    link.click();
  };

  const share = async () => {
    if (!qr || !navigator.share) return;
    try {
      const response = await fetch(qr);
      const file = new File([await response.blob()], "amit-peul-invitation-qr.png", { type: "image/png" });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ title: "Amit & Peul Wedding Invitation QR", files: [file] });
      } else {
        setStatus("Image sharing isn't supported here. Download the QR code instead.");
      }
    } catch (reason) {
      if (!(reason instanceof DOMException && reason.name === "AbortError")) {
        setStatus("Couldn't share the QR image. You can download it instead.");
      }
    }
  };

  return (
    <section className="qr-section" aria-labelledby="qr-title">
      <div className="qr-copy" data-reveal>
        <QrCode size={24} strokeWidth={1.4} />
        <p className="eyebrow">A keepsake to pass along</p>
        <h2 id="qr-title">The invitation, in a scan</h2>
        <p>Save this little doorway to our celebration or share it with someone special.</p>
        <div className="qr-caption">Scan to Open Our Wedding Invitation</div>
        {url && qr ? (
          <div className="qr-actions">
            <button className="button button--primary" onClick={download}><Download size={16} /> Download QR Code</button>
            {typeof navigator !== "undefined" && "share" in navigator && (
              <button className="button button--outline" onClick={share}><Share2 size={16} /> Share QR Code</button>
            )}
          </div>
        ) : (
          <p className="qr-note">{error || "A public QR code will appear here after this invitation is deployed. Local addresses are not encoded."}</p>
        )}
        {status && <p className="share-status" aria-live="polite">{status}</p>}
      </div>
      <div className="qr-frame" data-reveal>
        {qr && url ? (
          <img src={qr} alt="QR code that opens the public Amit and Peul wedding invitation" width="240" height="240" />
        ) : (
          <div className="qr-placeholder"><QrCode size={78} strokeWidth={1} /><span>Public QR awaits deployment</span></div>
        )}
      </div>
    </section>
  );
}
