import ButtonBack from "../../components/ButtonBack/ButtonBack";
import Subscription from "../../components/Subscription/Subscription";
import { services } from "../../mocks/services";
import classes from "./Article.module.css";
import "./Article.css";
import clsx from "clsx";

const Article = () => {
  const service = services[0];
  return (
    <div className={classes.article}>
      <img
        className={classes.image}
        src="https://s3-alpha-sig.figma.com/img/b492/4738/bdf020eddba621ee262f82f8f60915f9?Expires=1668384000&Signature=T6S~4jxE0Ynv36LUj~tLV1LbqGONll8jW6y~zYcXn3c6HZOemr66KGra7KLDgHvphZd1M~vblFVTqmomX7ZTbR~wggJfmJszgUoQceu-AOf6MCKycmeblzyrMi-e-ifZ1DSql15tU~ZiiltErvmHw2CLbN5DeQIkRnvUVlf5tJUOwTP~CPsm3bOhpWw2R7wn-OAXUXuRyx4U0KcCFmBfMIxk6buc5PcixYPaHyTATrmJJnSXzp1xnpd7~5jvMx2pfJmF2hMYialTjq0ilzLm0WTbw3aK6ZB5wmw9ZdL8KKK3dBjMoxFRMTFiLGkyYJCvcx~DWhrZQkI3pcPvFGEctw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        alt=""
      />

      <div className={clsx(classes.content, "content")}>
        <p className="tag">
          <b>✌️</b> #crypto_exchange
        </p>

        <h2>Interplanetary meteor shower: methodology and features</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          cupiditate architecto numquam? Quos omnis ut eaque, enim incidunt
          laboriosam, voluptatem, autem debitis excepturi alias reiciendis
          mollitia iure eius placeat iste aspernatur dolore sapiente
          reprehenderit quasi. Deserunt dolor tenetur totam laborum explicabo
          nesciunt corporis quae debitis quaerat iure incidunt praesentium minus
          sequi consequuntur tempore, saepe mollitia accusantium quo! Dolore
          nisi velit pariatur molestias ut. Aperiam officiis eaque debitis
          veritatis aliquid aliquam ducimus voluptatibus provident ab, nemo,
          assumenda accusamus iste fuga, architecto optio vel laboriosam ut esse
          ad. Tenetur, repudiandae nesciunt exercitationem natus quam aperiam
          minima consequuntur alias quidem autem illum, quos aut quisquam
          accusantium? Dolores totam dolor ducimus architecto distinctio aut
          temporibus fugit, rerum nobis quia quasi, optio similique minus quae
          porro eum nulla earum blanditiis vero
        </p>
        <h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
          odit!
        </h2>
        <p>
          Voluptas illum temporibus placeat, velit vel ipsum facilis adipisci
          eius quaerat quisquam ea maxime totam ullam eveniet beatae mollitia
          rem fugit excepturi natus cumque reprehenderit sapiente dolore
          molestiae atque! Quibusdam, deserunt blanditiis reprehenderit mollitia
          molestias fugiat fugit quia cum error illum accusamus aut? Perferendis
          quo molestias sit ratione vero voluptate laboriosam quibusdam eaque
          debitis dolore. Maxime repellat culpa earum quis iste nemo! Vel
          consequuntur illo provident ab dolor magnam, quas iure accusantium
          dolorem, mollitia soluta sunt ea similique minima consequatur
          obcaecati dolorum nesciunt earum odio, magni autem ipsam eius facilis?
          Maiores et molestias voluptatem eligendi, sed tempora accusantium
          debitis ratione sit corporis magni consequatur? Dolorum quisquam ad
          dignissimos magni dolorem ea libero maxime assumenda ratione sint nisi
          perferendis, blanditiis iste inventore tempore laboriosam qui error
          praesentium nam exercitationem sequi mollitia quibusdam odio. Iste
          delectus nisi atque illum impedit pariatur. Porro a mollitia
          voluptate, suscipit aspernatur qui aperiam laborum velit nemo, tempora
          corrupti est commodi dolorum. Adipisci, hic! Obcaecati voluptatum,
          consequuntur ab itaque aspernatur dicta provident id architecto
          reprehenderit quaerat tempora sapiente. Soluta delectus nisi quia
          repellat. Omnis voluptatibus nisi aut enim tempora! Earum, beatae?
          Ipsum vero sint rem tempore esse enim excepturi totam molestias
          voluptates perferendis necessitatibus provident placeat quidem nihil
          quasi sed itaque ratione iure nulla repudiandae voluptatibus, tempora
          at. Officiis quaerat nobis repellat eaque dicta blanditiis, magnam
          ullam modi illo quas molestias cum placeat accusamus sunt iusto?
          Consequatur, repellendus rem. Nisi, ex cupiditate? Ratione, soluta. Et
          deserunt doloribus veniam soluta modi officia recusandae optio eveniet
          pariatur
        </p>
        <Subscription service={service} noManage />
        <p>
          maxime possimus quasi itaque inventore. Ipsam placeat sapiente ipsum
          ut commodi. A perferendis molestias ut error est unde, nulla modi
          officiis ullam assumenda aut laborum sed amet, ipsam, quos impedit
          voluptas repudiandae eligendi harum non. Quos ipsam eum quidem,
          commodi rem incidunt. Odit velit, natus a eveniet obcaecati possimus
          quasi commodi ab rem dicta ipsa voluptatibus nisi optio. Beatae cumque
          doloremque repudiandae quasi. Quo, repudiandae. Magni ea quisquam,
          animi possimus reprehenderit, molestias obcaecati natus, nesciunt
          molestiae est placeat modi dolor harum aliquid alias illum suscipit.
          Laudantium laboriosam consequatur perferendis adipisci similique quas
          unde, sunt omnis temporibus. Laborum officia, neque in minima error
          perferendis, ea provident libero veritatis magni culpa, illum expedita
          labore similique quis animi voluptatem accusamus cum tempora fugit.
          Exercitationem quaerat eveniet excepturi consectetur, obcaecati veniam
          alias deleniti. Accusamus magnam natus non ad minus recusandae itaque
          ullam maiores ratione ipsam repudiandae quaerat magni consequatur
          dignissimos tempore, eos eveniet labore ab vero nam. Quae est, quod
          tempora unde odit animi assumenda blanditiis, inventore nam
          dignissimos laboriosam at sunt alias ex esse. A dolorem provident
          iusto perspiciatis aliquid consequatur adipisci enim voluptatibus esse
          aut necessitatibus reiciendis sequi repellat tempore eos libero,
          officia voluptates explicabo quisquam illum? Sunt quaerat natus
          laudantium eius. Ab ut neque corporis, a id similique dolor aperiam
          dolorem molestias illum deserunt. Ipsa ducimus maxime temporibus
          incidunt consequuntur dignissimos eveniet. Quaerat qui, deleniti
          magnam, amet labore ad perferendis repellat dolorum quae, corporis
          quisquam temporibus nulla impedit illum tenetur error nemo eius culpa.
          Tenetur assumenda ipsum, magnam id repellat quod quae architecto cum
          neque. Atque, natus sed illo delectus vel impedit, autem laborum aut
          quos ullam maiores commodi aliquam consequuntur deserunt ea ipsum
          distinctio porro repudiandae ipsam! Expedita soluta voluptates autem
          consequuntur iste in libero, fuga quibusdam labore? Nobis eligendi
          dolorem nam eaque possimus ipsa sit temporibus velit iure incidunt,
          quaerat aspernatur non voluptates voluptatem amet officiis vitae,
          aperiam in consectetur, totam nihil labore? Tempora et odit explicabo
          amet ipsam vitae, quasi recusandae tenetur. Natus iusto quasi
          veritatis cupiditate recusandae quae reprehenderit enim consectetur
          vitae magnam voluptatum facilis praesentium culpa aspernatur, dolorem
          minima cum quam eos ipsum amet iste tempora illo doloribus
          repudiandae. Enim, non officiis! Sed odit libero dolor ducimus debitis
          ratione, modi animi expedita velit magnam in ipsum maiores
          voluptatibus odio suscipit perferendis blanditiis dicta, voluptas fuga
          voluptatem repellendus eveniet laudantium. Ab sapiente impedit
          molestias modi blanditiis placeat animi assumenda minus obcaecati
          laborum facere veniam sunt error enim reprehenderit delectus, minima
          eligendi rerum reiciendis at
        </p>
        <Subscription service={service} noManage />
      </div>

      <ButtonBack className={classes.back} />
    </div>
  );
};

export default Article;
