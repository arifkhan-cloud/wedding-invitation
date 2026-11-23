import { useState } from "react";
import { Check, Copy, Heart, MessageCircle, Share2 } from "lucide-react";
import { weddingData } from "../data/weddingData";
import { getPublicInvitationUrl } from "../utils/publicUrl";
import { copyToClipboard, invitationMessage, openWhatsAppShare, shareInvitation } from "../utils/shareUtils";

export function ShareInvitation() {
  const [message, setMessage] = useState("");
  const url = getPublicInvitationUrl();
  const disabled = !url;

  const copyLink = async () => {
    if (!url) return;
    try {
      await copyToClipboard(url);
      setMessage("Invitation link copied. Share it with someone you love.");
    } catch {
      setMessage("Clipboard access is unavailable in this browser.");
    }
  };

  const shareNative = async () => {
    if (!url) return;
    const result = await shareInvitation(url);
    if (result === "unavailable") setMessage("Native sharing isn't available here. Try WhatsApp or copy the link.");
  };

  return (
    <section className="share-section section" id="share">
      <div className="share-content" data-reveal>
        <Heart className="share-heart" size={22} />
        <p className="eyebrow">Help our joy travel</p>
        <h2>Share a little love</h2>
        <p>Pass this invitation along to family and friends. We can't wait to celebrate together.</p>
        <div className="share-actions">
          <button
            className="button button--primary button--large"
            disabled={disabled}
            onClick={() => url && openWhatsAppShare(invitationMessage(url))}
          >
            <MessageCircle size={18} /> Share Invitation on WhatsApp
          </button>
          <button className="button button--outline" disabled={disabled} onClick={copyLink}>
            {message.startsWith("Invitation link copied") ? <Check size={17} /> : <Copy size={17} />} Copy Invitation Link
          </button>
          {typeof navigator !== "undefined" && "share" in navigator && (
            <button className="button button--quiet" disabled={disabled} onClick={shareNative}>
              <Share2 size={17} /> More sharing options
            </button>
          )}
        </div>
        <p className="share-status" aria-live="polite">
          {message || (disabled
            ? "Sharing will be ready after deployment. Local preview links are never shared as public invitations."
            : `Sharing: ${weddingData.groom} & ${weddingData.bride}`)}
        </p>
      </div>
    </section>
  );
}
