// This is something like an array, it is a contiguous space of memory.
const a = new ArrayBuffer(6);
console.log(a);

// This is a view of the array buffer, it is a way to access the array buffer. Each value is 8 bits.
const a8 = new Uint8Array(a);
a8[0] = 45;
a8[2] = 0x45;
console.log(a); // ArrayBuffer { [Uint8Contents]: <2d 00 45 00 00 00>, byteLength: 6 }

// The offset of this view is (position * 8 bits). So when we set the value of the second position to 0x45, it is actually setting the third byte of the array buffer (because each byte is 8 bits).

// Another view but each value is 16 bits.
const a16 = new Uint16Array(a);
a16[2] = 0x4545;
console.log(a); // ArrayBuffer { [Uint8Contents]: <2d 00 45 00 45 45>, byteLength: 6 }

// But here the offset is (position * 16 bits). So when we set the value of the second position to 0x4545, it is actually setting the third and fourth bytes of the array buffer (because each byte is 8 bits).
