import { modifier } from 'ember-modifier';

const canvas = document.createElement("canvas");
export default modifier(async function blurhashDecoder(element, [hash, width, height, punch, canvasWidth, canvasHeight], ctrl = {}) {
    const { isBlurhashValid, decode } = await import('blurhash');
    if (!isBlurhashValid(hash)) {
        return;
    }
    const pixels = decode(hash, width || 320, height || 240, punch || 1);
    const ctx = canvas.getContext("2d");
    const imageData = ctx.createImageData(canvasWidth || width, canvasHeight || height);
    imageData.data.set(pixels);
    ctx.putImageData(imageData, 0, 0);
    const img = canvas.toDataURL(ctrl.f ? ctrl.f : 'image/jpeg', ctrl.q ? ctrl.q : 0.85);
    if (ctrl.bg) {
        element.style['background-image'] = `url(${img})`;
    } else {
        element.style.setProperty(ctrl.p ? ctrl.p : '--blurhash-image', `url(${img})`);
    }
});
