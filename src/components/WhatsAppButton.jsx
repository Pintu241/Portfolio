import { useState, useRef, useEffect } from "react";

const WHATSAPP_NUMBER = "919955116500";

const WhatsAppButton = () => {
  const [open, setOpen]       = useState(false);
  const [message, setMessage] = useState("");
  const inputRef              = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const handleSend = () => {
    const text = message.trim() ||
      "Hi! I came across your portfolio and I'd like to connect with you regarding an opportunity.";
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setMessage("");
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  return (
    <div style={{ position: "fixed", bottom: "28px", right: "28px", zIndex: 9999, fontFamily: "'DM Mono', monospace" }}>

      {/* ── Chat popup ── */}
      {open && (
        <div style={{
          position: "absolute",
          bottom: "70px",
          right: 0,
          width: "320px",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 8px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(37,211,102,0.2)",
          animation: "waSlideUp 0.25s cubic-bezier(0.34,1.56,0.64,1)",
        }}>

          {/* Header */}
          <div style={{
            background: "linear-gradient(135deg, #1a6b3a, #128c7e)",
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}>
            {/* Avatar */}
            <div style={{
              width: "42px", height: "42px", borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "20px", flexShrink: 0,
            }}>👨‍💻</div>
            <div>
              <div style={{ color: "#fff", fontWeight: "700", fontSize: "14px", fontFamily: "'Syne', sans-serif" }}>
                Pintu
              </div>
              <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "11px", display: "flex", alignItems: "center", gap: "5px" }}>
                <span style={{ width: "7px", height: "7px", background: "#4fffb0", borderRadius: "50%", display: "inline-block" }} />
                Typically replies instantly
              </div>
            </div>
            {/* Close */}
            <button onClick={() => setOpen(false)} style={{
              marginLeft: "auto", background: "none", border: "none",
              color: "rgba(255,255,255,0.8)", cursor: "pointer", fontSize: "18px",
              lineHeight: 1, padding: "2px 6px", borderRadius: "6px",
            }}>✕</button>
          </div>

          {/* Chat body */}
          <div style={{
            background: "#0b1a10",
            backgroundImage: "radial-gradient(rgba(37,211,102,0.04) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            padding: "16px 14px 12px",
          }}>
            {/* Bot message bubble */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "14px" }}>
              <div style={{
                background: "rgba(37,211,102,0.12)",
                border: "1px solid rgba(37,211,102,0.2)",
                borderRadius: "0 12px 12px 12px",
                padding: "10px 13px",
                color: "#d1fae5",
                fontSize: "13px",
                lineHeight: "1.5",
                maxWidth: "85%",
              }}>
                👋 Hi there! I'm <strong>Pintu</strong>.<br />
                Type your message below and I'll receive it directly on WhatsApp!
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", marginTop: "5px", textAlign: "right" }}>
                  {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </div>
              </div>
            </div>

            {/* Input area */}
            <div style={{ display: "flex", gap: "8px", alignItems: "flex-end" }}>
              <textarea
                ref={inputRef}
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Type a message..."
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(37,211,102,0.25)",
                  borderRadius: "12px",
                  padding: "10px 13px",
                  color: "#e2e8f0",
                  fontSize: "13px",
                  fontFamily: "'DM Mono', monospace",
                  resize: "none",
                  outline: "none",
                  lineHeight: "1.5",
                  transition: "border-color 0.2s",
                }}
                onFocus={e => e.target.style.borderColor = "rgba(37,211,102,0.6)"}
                onBlur={e  => e.target.style.borderColor = "rgba(37,211,102,0.25)"}
              />
              {/* Send button */}
              <button
                onClick={handleSend}
                title="Send on WhatsApp"
                style={{
                  width: "42px", height: "42px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #25d366, #128c7e)",
                  border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 4px 14px rgba(37,211,102,0.4)",
                  transition: "transform 0.15s, box-shadow 0.15s",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
              >
                {/* Send arrow icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </div>

            <div style={{ textAlign: "center", marginTop: "10px", fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
              Powered by{" "}
              <span style={{ color: "#25d366" }}>WhatsApp</span>
            </div>
          </div>
        </div>
      )}

      {/* ── Floating button ── */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Chat on WhatsApp"
        style={{
          width: "56px", height: "56px", borderRadius: "50%",
          background: "linear-gradient(135deg, #25d366, #128c7e)",
          border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
          transition: "transform 0.2s, box-shadow 0.2s",
          animation: open ? "none" : "waPulse 2.5s ease-in-out infinite",
          transform: open ? "rotate(90deg) scale(0.9)" : "scale(1)",
        }}
        onMouseEnter={e => { if (!open) e.currentTarget.style.transform = "scale(1.12)"; }}
        onMouseLeave={e => { if (!open) e.currentTarget.style.transform = "scale(1)"; }}
      >
        {open ? (
          /* X icon when open */
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        ) : (
          /* WhatsApp icon */
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" fill="white">
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.766L0 32l8.469-2.004A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.771-1.851l-.486-.29-5.028 1.189 1.211-4.908-.317-.503A13.24 13.24 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.355-1.162-2.72-1.294-.365-.133-.63-.199-.896.199s-1.029 1.294-1.261 1.56c-.232.266-.465.299-.863.1-.398-.199-1.679-.619-3.2-1.977-1.182-1.056-1.98-2.361-2.213-2.759-.232-.398-.025-.614.175-.812.179-.179.398-.465.597-.698.199-.232.266-.398.398-.664.133-.266.067-.499-.033-.698-.1-.2-.896-2.16-1.228-2.959-.323-.777-.651-.671-.896-.684l-.763-.013c-.266 0-.698.1-1.063.499s-1.395 1.362-1.395 3.322 1.428 3.853 1.627 4.119c.199.266 2.813 4.296 6.815 6.025.953.411 1.696.657 2.275.841.956.304 1.826.261 2.514.158.767-.114 2.355-.963 2.688-1.893.332-.929.332-1.726.232-1.893-.099-.166-.365-.266-.763-.465z" />
          </svg>
        )}
      </button>

      <style>{`
        @keyframes waPulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.4), 0 0 0 0 rgba(37,211,102,0.35); }
          50%       { box-shadow: 0 4px 20px rgba(37,211,102,0.4), 0 0 0 10px rgba(37,211,102,0); }
        }
        @keyframes waSlideUp {
          from { opacity: 0; transform: translateY(16px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppButton;
