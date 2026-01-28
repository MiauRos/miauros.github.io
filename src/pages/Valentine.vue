<template>
  <v-container
    fluid
    class="fill-height d-flex align-center justify-center background"
  >
    <!-- Música -->
    <audio ref="music" :src="loveMusic" loop />

    <!-- Corazones flotando -->
    <div class="hearts">
      <span v-for="n in 15" :key="n">❤️</span>
    </div>

    <!-- Explosión de corazones -->
    <div v-if="accepted" class="burst">
      <span v-for="n in 30" :key="n">💖</span>
    </div>

    <v-card class="pa-10 text-center card" elevation="12">
      <!-- Foto -->
      <v-img
        src="@/assets/nosotros.jpg"
        height="280"
        cover
        class="mb-6 rounded-xl"
      />

      <v-card-title class="text-h4 font-weight-bold mb-4">
        💘 ¿Quieres ser mi San Valentín? 💘
      </v-card-title>

      <v-card-text class="text-body-1 mb-6 typewriter">
        <pre>{{ displayedText }}</pre>
      </v-card-text>

      <v-row justify="center" class="mt-4" dense>
        <v-col cols="12" md="5">
          <v-btn
            color="pink"
            size="x-large"
            block
            @click="sayYes"
          >
            💕 Sí
          </v-btn>
        </v-col>

        <v-col cols="12" md="5">
          <v-btn
            color="grey"
            size="x-large"
            block
            class="no-btn"
          >
            😅 No
          </v-btn>
        </v-col>
      </v-row>

      <v-expand-transition>
        <div v-if="accepted" class="mt-8 text-h4 accepted typewriter">
          <pre>{{ displayedFinalText }}</pre>
        </div>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import loveMusic from '@/assets/love-music.mp3'

const accepted = ref(false)
const music = ref(null)

const fullText = `Entre todas las coincidencias de la vida,
la más bonita fue encontrarte mi Jessy.

Hoy te hablo con el corazón:
Entre millones de personas,
yo te elegiría a ti una y otra vez ❤️`

const finalText = `Jessy ❤️ Mau

Mi lugar favorito siempre va a ser contigo 💕`

const displayedText = ref('')
const displayedFinalText = ref('')

const typeWriter = (text, target, speed = 40) => {
  target.value = ''
  let i = 0

  const interval = setInterval(() => {
    target.value += text[i]
    i++
    if (i >= text.length) clearInterval(interval)
  }, speed)
}

onMounted(() => {
  typeWriter(fullText, displayedText, 35)
})

const sayYes = async () => {
  accepted.value = true
  typeWriter(finalText, displayedFinalText, 45)

  if (music.value) {
    music.value.volume = 1
    music.value.play()
  }
}
</script>

<style scoped>
/* Fondo */
.background {
  background: linear-gradient(135deg, #ff758c, #ff7eb3);
  overflow: hidden;
}

/* Card */
.card {
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.93);
  z-index: 2;
}

/* Texto final */
.accepted {
  color: #e91e63;
  font-weight: bold;
}

/* Botón NO */
.no-btn {
  pointer-events: none;
  opacity: 0.6;
}

/* Corazones flotando */
.hearts {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

.hearts span {
  position: absolute;
  bottom: -10%;
  font-size: 28px;
  animation: floatUp 10s linear infinite;
}

.hearts span:nth-child(odd) {
  font-size: 36px;
}

.hearts span:nth-child(1) { left: 10%; animation-duration: 9s; }
.hearts span:nth-child(2) { left: 20%; animation-duration: 11s; }
.hearts span:nth-child(3) { left: 30%; animation-duration: 8s; }
.hearts span:nth-child(4) { left: 40%; animation-duration: 12s; }
.hearts span:nth-child(5) { left: 50%; animation-duration: 10s; }
.hearts span:nth-child(6) { left: 60%; animation-duration: 9s; }
.hearts span:nth-child(7) { left: 70%; animation-duration: 13s; }
.hearts span:nth-child(8) { left: 80%; animation-duration: 10s; }
.hearts span:nth-child(9) { left: 90%; animation-duration: 11s; }

@keyframes floatUp {
  0% { transform: translateY(0); opacity: 0; }
  10% { opacity: 1; }
  100% { transform: translateY(-120vh); opacity: 0; }
}

/* Explosión de corazones */
.burst {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
}

.burst span {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 32px;
  animation: burst 1.5s ease-out forwards;
}

.burst span:nth-child(n) {
  transform: rotate(calc(360deg / 30 * var(--i))) translate(0);
}

@keyframes burst {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(
      calc(-50% + (random() * 400px - 200px)),
      calc(-50% + (random() * 400px - 200px))
    ) scale(1.5);
    opacity: 0;
  }
}

.typewriter pre {
  white-space: pre-wrap;
  font-family: inherit;
  margin: 0;
}
</style>
