export const srcImgs = ['imgs/img1.jpg', 'imgs/img2.jpg', 'imgs/img3.jpg', 'imgs/img4.jpg', 
'imgs/img5.jpg', 'imgs/img6.jpg', 'imgs/img7.jpg', 'imgs/img8.jpg', 'imgs/img9.jpg', 'imgs/img1.jpg', 'imgs/img2.jpg', 'imgs/img3.jpg', 'imgs/img4.jpg', 
'imgs/img5.jpg', 'imgs/img6.jpg', 'imgs/img7.jpg', 'imgs/img8.jpg', 'imgs/img9.jpg']

export function shuffledCards(){
    for (let i = srcImgs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [srcImgs[i], srcImgs[j]] = [srcImgs[j], srcImgs[i]];
    }
      return srcImgs;
}