<template>
  <Pagina classePagina="full-height" :paddingPage="false">
    <Titulo imagem="statics/imgs/consequencias/002.png"/>

    <div class="q-pl-sm q-pr-sm">
      <Linha>
        <Coluna>
          <PVImagem @clickBottomRight="executarSom('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')"
                    imagemBottomRight="statics/imgs/audio.png"
                    imagem="statics/imgs/consequencias/003.png"/>
        </Coluna>
      </Linha>

      <Container cor="#7887C4" altura="auto" class="q-pa-sm">
        <Coluna>
          <PVImagem  imagem="statics/imgs/consequencias/005.png"/>
        </Coluna>
      </Container>

      <Linha>
        <Coluna>
          <PVImagem @clickBottomRight="executarSom('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')"
                    imagemBottomRight="statics/imgs/audio.png"
                    imagem="statics/imgs/consequencias/007.png"/>
        </Coluna>
      </Linha>
      <br>
    </div>
  </Pagina>
</template>

<script>
  import Pagina from "../components/Shared/Pagina";
  import Linha from "../components/Shared/Linha";
  import Coluna from "../components/Shared/Coluna";
  import PVImagem from "../components/PVImagem";
  import Titulo from "../components/Shared/Titulo";
  import Container from "../components/Shared/Container";
  import audioMixin from "../mixins/audioMixin";

  export default {
    name: "TelaConsequencias",
    components: {Container, Titulo, PVImagem, Coluna, Linha, Pagina},
    mixins: [audioMixin]

  }
</script>
