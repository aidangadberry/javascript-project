import Laser from './laser';

class Sprite {
  constructor(x, y, ctx, deg, url) {
    this.width = 50;
    this.height = 20;
    this.x = x;
    this.y = y;
    this.rad = deg * Math.PI / 180;
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = url;

    this.img.onload = () => {
      this.draw();
    }
  }

  getCenterPos() {
    return [this.x + this.width / 2, this.y + this.height / 2];
  }

  draw() {
    this.ctx.shadowBlur = 0;
    this.ctx.shadowColor = "transparent";
    
    this.ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
    this.ctx.rotate(this.rad);

    this.ctx.drawImage(this.img, -this.width / 2, -this.height / 2);

    this.ctx.rotate(2 * Math.PI - this.rad);
    this.ctx.translate(-this.x - this.width / 2, -this.y - this.height / 2);
  }

  rotateSprite(dir) {
    const mult = dir === "clockwise" ? 1 : -1;

    if (this instanceof Laser) {
      this.rad += mult * 0.5 * Math.PI / 180;
    } else {
      this.rad += mult * 90 * Math.PI / 180;
    }
  }
}

export default Sprite;
