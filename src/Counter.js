import { useState } from "react";


export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div>
      {/* onClick - camelcase */}
      <button className='btn-like' onClick={() => { setLike(like + 1); }}>
        👍 {like}</button>
      <button className='btn-dislike' onClick={() => { setDisLike(dislike + 1); }}>
        👎 {dislike}</button>
    </div>
  );
}
