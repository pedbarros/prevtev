<template>
  <Conteudo classeConteudo="full-height" :paddingPage="false">
    <Titulo imagem="statics/imgs/como-prevenir/002.png"/>

    <div class="q-pl-sm q-pr-sm">
      <Linha>
        <Coluna>
          <PVImagem  @clickBottomRight="executarSom('Como%20prevenir%20-%2001.wav')"
                     imagemBottomRight="statics/imgs/audio.png"
                     imagem="statics/imgs/como-prevenir/003.png"/>
        </Coluna>
      </Linha> <br>

      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/como-prevenir/005.png"/>
        </Coluna>
      </Linha> <br>

      <Linha>
        <Coluna>
          <PVImagem  @clickBottomRight="executarSom('Como%20prevenir%20-%2002.wav')"
                     imagemBottomRight="statics/imgs/audio.png"
                     imagem="statics/imgs/como-prevenir/006.png"/>
        </Coluna>
      </Linha>


      <Linha>
        <Coluna>
          <PVImagem  @clickBottomRight="executarSom('Como%20prevenir%20-%2003.wav')"
                     imagemBottomRight="statics/imgs/audio.png"
                     imagem="statics/imgs/como-prevenir/008.png"/>
        </Coluna>
      </Linha> <br>


      <Linha>
        <Coluna>
          <PVImagem  @clickBottomRight="executarSom('Como%20prevenir%20-%2004.wav')"
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
          <PVImagem  @clickBottomRight="executarSom('Como%20prevenir%20-%2005.wav')"
                     imagemBottomRight="statics/imgs/audio.png"
                     imagem="statics/imgs/como-prevenir/013.png"/>
        </Coluna>
      </Linha> <br>

      <Linha>
        <Coluna>
          <PVImagem  @clickBottomRight="executarSom('Como%20prevenir%20-%2006.wav')"
                     imagemBottomRight="statics/imgs/audio.png"
                     imagem="statics/imgs/como-prevenir/015.png"/>
        </Coluna>
      </Linha> <br>


      <Linha>
        <Coluna>
          <PVImagem  @clickBottomRight="executarSom('Como%20prevenir%20-%2002.wav')"
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
  </Conteudo>
</template>

<script>
  import Conteudo from "../components/Shared/Conteudo";
  import Linha from "../components/Shared/Linha";
  import Coluna from "../components/Shared/Coluna";
  import PVImagem from "../components/PVImagem";
  import Titulo from "../components/Shared/Titulo";
  import Container from "../components/Shared/Container";
  import audioMixin from "../mixins/audioMixin";

  export default {
    name: "TelaComoPrevenir",
    components: {Container, Titulo, PVImagem, Coluna, Linha, Conteudo},
    mixins: [audioMixin]
  }
</script>
