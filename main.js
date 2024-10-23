import draw from './modules/utils.js';
console.log('main:debut');
draw();
function checkElement(x, w) {
  return (x instanceof HTMLElement && x.offsetWidth === w && x.offsetHeight === x.offsetWidth);
}
(function main(R = 200, MW = 250){
  if (typeof window !== 'object' || window.top !== window.self) {
    console.warn('window:failed');
    return;
  }
  window.addEventListener(
    'load',
    () => {
      try {
        const c = document.getElementById('box')?.querySelector('canvas')?.getContext('2d');
        const p = document.getElementById('box')?.querySelector('#plan');
        if (!(
          c instanceof CanvasRenderingContext2D && checkElement(c.canvas, 2 * MW)
          && checkElement(p, 2 * R)
        ))
        {
          throw new Error('elements:failed');
        }

        console.log('%celements:success','color:blue');

        p.addEventListener(
          'mouseup',
          (e) => {
            console.log(`event: ${e.target.id} & ${e.type}`,'color:purple');
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
