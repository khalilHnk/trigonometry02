const utils = {
  check(elt, w) {
    return (elt instanceof HTMLElement && elt.offsetWidth === w && elt.offsetHeight === elt.offsetWidth);    
  },
};

export default utils;
