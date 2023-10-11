import FadeInText from "./fadeInText";

function intr() {

  return (
    <section className="p-intr">
      <h1>
        <picture>
          <source srcSet="/image/butterfly-effect-pc.png" media="(min-width:1000px)" />
          <img className="" src="/image/butterfly-effect-sp.png" alt="BUTTERFLY EFFECT" loading="lazy" />
        </picture>
      </h1>
      <div className="p-intr__content">
        <FadeInText>
          2010年、高校一年生だった自分は、同級生とたった二人で人生初めてのバンドを結成した。<br />
          「白熊ピカソズ」、そんなヘンテコな名前の、湘南の片隅のパンクバンドから自分の全てが始まった。<br />
          <span>あれから13年、誰からも見向きもされなかった小さくて孤独な反骨が、<br /></span>いつしか多くの人を巻き込んで、大き過ぎるくらいの自由へと形を変えた。
        </FadeInText>
        <FadeInText>
          本展示は、私Mai-kouが16歳から29歳の今日に至るまでの、音楽及びアートワークに纏わる、<br />
          "SHIROKUMA"という屋号を掲げての13年間の活動記録である。<br />
          これらは自分のこれまでのアウトプット殆ど全てとも、十代から二十代の集大成とも言える。
        </FadeInText>
        <FadeInText>
          音楽とアートワークは自分の中で同義の存在であり、決して、一方がもう一方の付属品ではない。<br />
          いつ何時も双方が作用し合うことにより、自分のアイデンティティのアウトプットを可能にしてきた。
        </FadeInText>
        <FadeInText>
          しかしこれらを実現するのに自分1人では到底不可能で、いつでも周囲に居るあらゆる人の協力のもと成り立ってきた。<br />
          クリエイティブでエッジの効いた、心から信用できる仲間達が<br />
          自分の周りに、こんなにも沢山居てくれることは私の誇りであり支えでもある。
        </FadeInText>
        <FadeInText>
          13年前1人ぼっちで歯を食い縛っていた自分は、彼らと出会い創作やその空間を共にしたことで、ものづくりの面白さに深く浸かることができた。ゼロから形あるものを生み出し、世の中を振動させることの楽しさを知ることが出来た。
        </FadeInText>
        <FadeInText>
          私はもう、1人じゃない。<br />
          何処までも自由だし何処へでも飛んでいける。
        </FadeInText>
      </div>
    </section>
  );
}

export default intr;
