<template>
  <Pagina classePagina="full-height" :paddingPage="false">
    <Titulo imagem="statics/imgs/como-prevenir/002.png"/>

    <div class="q-pl-sm q-pr-sm">
      <Linha>
        <Coluna>
          <PVImagem  @clickBottomRight="executarSom('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')"
                     imagemBottomRight="statics/imgs/audio.png"
                     imagem="statics/imgs/como-prevenir/003.png"/>
        </Coluna>
      </Linha> <br>

      <Linha>
        <Coluna>
          <PVImagem  @clickBottomRight="executarSom('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')"
                     imagemBottomRight="statics/imgs/audio.png"
                     imagem="statics/imgs/como-prevenir/005.png"/>
        </Coluna>
      </Linha> <br>


      <Linha>
        <Coluna>
          <PVImagem  @clickBottomRight="executarSom('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')"
                     imagemBottomRight="statics/imgs/audio.png"
                     imagem="statics/imgs/como-prevenir/008.png"/>
        </Coluna>
      </Linha> <br>


      <Linha>
        <Coluna>
          <PVImagem  @clickBottomRight="executarSom('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')"
                     imagemBottomRight="statics/imgs/audio.png"
                     imagem="statics/imgs/como-prevenir/010.gif"/>
        </Coluna>
      </Linha> <br>


      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/como-prevenir/012.png"/>
        </Coluna>
      </Linha> <br>


      <Linha>
        <Coluna>
          <PVImagem  @clickBottomRight="executarSom('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')"
                     imagemBottomRight="statics/imgs/audio.png"
                     imagem="statics/imgs/como-prevenir/013.png"/>
        </Coluna>
      </Linha> <br>

      <Linha>
        <Coluna>
          <PVImagem  @clickBottomRight="executarSom('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')"
                     imagemBottomRight="statics/imgs/audio.png"
                     imagem="statics/imgs/como-prevenir/015.png"/>
        </Coluna>
      </Linha> <br>


      <Linha>
        <Coluna>
          <PVImagem  @clickBottomRight="executarSom('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')"
                     imagemBottomRight="statics/imgs/audio.png"
                     imagem="statics/imgs/como-prevenir/017.png"/>
        </Coluna>
      </Linha> <br>


      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/como-prevenir/019.png"/>
        </Coluna>
      </Linha> <br>


      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/como-prevenir/020.png"/>
        </Coluna>
      </Linha> <br>

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
    name: "TelaComoPrevenir",
    components: {Container, Titulo, PVImagem, Coluna, Linha, Pagina},
    mixins: [audioMixin]
  }
</script>
