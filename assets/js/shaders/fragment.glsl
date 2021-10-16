uniform sampler2D uTexture;
uniform float uAlpha;
uniform vec2 uOffset;
varying vec2 vUv;



void main() {
    vec4 color = texture2D(uTexture, vUv);
    gl_FragColor = color;
}