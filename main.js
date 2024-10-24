import utils from './modules/utils.js';
console.log('main:debut');

(function main(R = 200, MW = 250, sx = 1, sy = -1){
  if (typeof window !== 'object' || window.top !== window.self) {
    console.warn('window:failed');
    return;
  }
  window.addEventListener(
    'load',
    () => {
      try {
        const ctx = document.getElementById('box')?.querySelector('canvas')?.getContext('2d');
        const p = document.getElementById('box')?.querySelector('#plan');
        if (!(
          ctx instanceof CanvasRenderingContext2D && utils.check(ctx.canvas, 2 * MW)
          && utils.check(p, 2 * R)
        ))
        {
          throw new Error('elements:failed');
        }

        ctx.setTransform(sx,0,0,sy,MW,MW);
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'rgba(0,0,0,.8)';
        ctx.lineWidth = 2;

        p.addEventListener(
          'mouseup',
          (e) => {
            let [x, y] = [
              sx * (e.offsetX - R),
              sy * (e.offsetY - R),
            ];

            ctx.clearRect(-MW,-MW,2*MW,2*MW);
            
            ctx.beginPath();
            ctx.arc(x,y,5,0,2*Math.PI);
            ctx.fill();
            ctx.stroke();
          },
          false
        );
      } catch(err) {
        console.error(err.message);
      }
    },
    {
      once: true
    }
  );
})();
console.log('main:fin');
