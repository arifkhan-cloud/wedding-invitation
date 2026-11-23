import { weddingData } from "../data/weddingData";
import { Alpana } from "./Alpana";

export function CoupleSection() {
  return (
    <section className="couple-section section">
      <div className="couple-copy" data-reveal>
        <p className="eyebrow">Two hearts, one journey</p>
        <h2>A promise for a lifetime</h2>
        <p>Rooted in tradition and surrounded by the people we love, we begin our next chapter together.</p>
        <div className="couple-signature">{weddingData.groom}<span>&amp;</span>{weddingData.bride}</div>
      </div>
      <div className="couple-art" data-reveal>
        <Alpana className="couple-halo" />
        <svg className="couple-illustration" viewBox="0 0 460 410" role="img" aria-label="Original illustration of a Bengali bride in a red sari and groom in ivory wedding attire">
          <path d="M28 393 Q230 366 432 393" fill="none" stroke="#C69B54" strokeWidth="2" />
          <circle cx="230" cy="190" r="173" fill="none" stroke="#C69B54" strokeOpacity=".25" />
          <circle cx="230" cy="190" r="158" fill="none" stroke="#C69B54" strokeOpacity=".2" strokeDasharray="2 7" />
          <path d="M43 387 C48 336 75 286 125 270 L163 290 L197 270 C222 288 235 329 239 387Z" fill="#FFF0CE" stroke="#C69B54" strokeWidth="2" />
          <path d="M49 361 Q134 331 235 363 M56 379 Q143 351 238 380" fill="none" stroke="#C69B54" strokeWidth="3" />
          <path d="M226 387 C230 328 250 286 294 269 L333 287 L369 268 C414 287 437 333 441 387Z" fill="#8E1935" />
          <path d="M235 356 Q333 328 436 359 M232 379 Q337 350 439 382" fill="none" stroke="#C69B54" strokeWidth="4" />
          <path d="M246 349 Q335 321 427 352" fill="none" stroke="#FFF0CE" strokeWidth="1.5" strokeDasharray="3 8" />
          <path d="M85 125 Q89 74 119 66 Q147 49 176 69 Q201 87 198 139 L184 194 H98Z" fill="#59352D" />
          <ellipse cx="145" cy="143" rx="48" ry="58" fill="#D9A281" />
          <path d="M93 112 L108 43 L145 14 L182 43 L198 112 L179 96 L168 55 L145 47 L120 58 L108 104Z" fill="#FFF0CE" stroke="#C69B54" strokeWidth="2.5" />
          <path d="M145 16 L151 44 L145 40 L139 44Z" fill="#C69B54" />
          <path d="M127 143 Q135 138 141 143 M153 143 Q160 138 168 143" fill="none" stroke="#59352D" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M146 148 L142 163 L148 164 M137 177 Q146 183 156 176" fill="none" stroke="#8E1935" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M119 194 Q144 207 171 193 L190 268 L145 293 L102 267Z" fill="#FFF9EC" stroke="#C69B54" strokeWidth="2" />
          <path d="M111 222 Q145 237 179 221 M104 253 Q145 270 186 251" fill="none" stroke="#C69B54" strokeWidth="3" />
          <path d="M96 197 Q145 221 193 196 L202 219 Q145 247 88 219Z" fill="#C69B54" />
          <path d="M117 189 Q145 227 174 189 L182 255 Q145 279 108 254Z" fill="none" stroke="#8E1935" strokeWidth="3" />
          <path d="M270 124 Q273 74 305 64 Q337 49 367 72 Q396 91 389 145 L376 197 H281Z" fill="#59352D" />
          <ellipse cx="330" cy="145" rx="49" ry="59" fill="#D9A281" />
          <path d="M268 130 Q258 76 292 49 Q326 23 366 49 Q401 72 394 132 L376 107 L359 65 L326 54 L291 73 L282 119Z" fill="#8E1935" />
          <path d="M276 91 L328 35 L380 91 L366 81 L348 62 L327 55 L305 66 L289 85Z" fill="#FFF0CE" stroke="#C69B54" strokeWidth="2" />
          <path d="M328 36 L336 64 L327 60 L320 64Z" fill="#C69B54" />
          <path d="M312 145 Q320 139 326 145 M338 145 Q345 139 352 145" fill="none" stroke="#59352D" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M331 151 L326 164 L333 165 M321 179 Q331 185 341 178" fill="none" stroke="#8E1935" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M305 197 Q331 211 357 195 L385 269 L333 292 L280 266Z" fill="#8E1935" stroke="#C69B54" strokeWidth="2" />
          <path d="M284 223 Q333 247 379 219 L390 252 Q337 278 276 249Z" fill="#FFF0CE" />
          <path d="M281 258 Q333 282 386 257 M288 273 Q335 297 381 275" fill="none" stroke="#C69B54" strokeWidth="3" />
          <path d="M293 198 Q331 226 369 196 L378 222 Q333 249 284 222Z" fill="#C69B54" />
          <path d="M160 207 C184 249 208 261 230 265 C250 261 273 246 295 205" fill="none" stroke="#617C4B" strokeWidth="3" />
          {[171, 187, 204, 221, 239, 256, 273, 286].map((x, i) => <circle key={x} cx={x} cy={220 + Math.abs(4 - i) * 7} r="5" fill="#FFF0CE" stroke="#C69B54" />)}
          <circle cx="145" cy="170" r="4" fill="#C69B54" />
          <circle cx="330" cy="173" r="4" fill="#C69B54" />
        </svg>
        <div className="couple-caption">Bengali wedding, timeless love</div>
      </div>
    </section>
  );
}
