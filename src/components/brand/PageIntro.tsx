import { CodexiaWordmark } from "@/components/brand/CodexiaWordmark";
import { site } from "@/lib/site";

/**
 * Splash SSR: el logo va en el HTML inicial (sin esperar hidratación de React).
 * El script inline controla la salida.
 */
export function PageIntro() {
  return (
    <>
      <div id="page-intro" className="page-intro" aria-hidden>
        <div className="page-intro-glow" />
        <span className="page-intro-line" />
        <div className="page-intro-mark">
          <span className="page-intro-logo-ring">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/codexia-mark.jpg"
              alt={site.name}
              width={144}
              height={144}
              decoding="sync"
              fetchPriority="high"
              className="page-intro-logo-img"
            />
          </span>
          <CodexiaWordmark className="text-[1.2rem] tracking-[0.3em] sm:text-[1.5rem] sm:tracking-[0.34em]" />
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){
  var root=document.documentElement;
  var el=document.getElementById("page-intro");
  if(!el){root.classList.add("intro-done");return;}
  root.classList.add("intro-active");
  root.classList.remove("intro-done");
  var prev=document.body.style.overflow;
  document.body.style.overflow="hidden";
  var leave=550, done=950;
  try{
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){
      leave=300; done=550;
    }
  }catch(e){}
  setTimeout(function(){ el.classList.add("is-leaving"); }, leave);
  setTimeout(function(){
    el.remove();
    root.classList.remove("intro-active");
    root.classList.add("intro-done");
    document.body.style.overflow=prev||"";
  }, done);
})();`,
        }}
      />
    </>
  );
}
