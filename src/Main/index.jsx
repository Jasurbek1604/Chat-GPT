import React, { memo } from "react";
import {
  Container,
  Wrapper,
  Message,
  MainBottom,
  Menu,
  Bar,
  Form,
  Input,
  Button,
  Img,
  Text,
  MessageFrom,
} from "./style";
import bars from "../assets/bars.svg";
import x from "../assets/x-solid.svg";
import send from "../assets/send.svg";
import jasco from "../assets/jasco.jpg";
import chat from "../assets/chatgptLogo.svg";

const Main = ({ value }) => {
  const [isOpen, setIsOpen] = value;
  return (
    <Container isOpen={isOpen}>
      <Menu onClick={() => setIsOpen(!isOpen)}>
        <Bar src={isOpen ? x : bars} alt="" isOpen={isOpen} />
      </Menu>
      <Wrapper>
        <Message>
          <MessageFrom>
            <Img src={jasco} user="true" />
            <Text user="true">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              deserunt ullam soluta rem dignissimos aliquid ab laborum veritatis
              adipisci culpa?
            </Text>
          </MessageFrom>
          <MessageFrom>
            <Img src={chat} user="true" />
            <Text user="true">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              consequatur numquam consequuntur, magnam distinctio ipsa, aliquid
              ipsum quidem, commodi cupiditate molestiae sunt impedit nisi
              reiciendis accusamus necessitatibus porro. Eligendi perferendis
              ipsum tempora minima? Corporis modi quasi amet, temporibus porro,
              doloremque omnis maiores quia delectus unde repellat optio
              expedita voluptatum nobis voluptates est blanditiis neque dolorum,
              mollitia reprehenderit ex. Quisquam ipsam eveniet vel? Labore,
              nulla! Voluptatem harum ex facilis eaque ratione possimus culpa
              magnam nulla, adipisci, consectetur ipsum? Nulla minima labore
              nihil, velit voluptatibus odio amet magni itaque, molestias, id
              eum quia earum. Nisi maiores tempore unde explicabo, magni
              voluptate neque ipsam inventore aspernatur dolorem eligendi in
              architecto animi cupiditate harum quis, nam corporis esse eaque
              repudiandae impedit incidunt omnis a fuga. Nulla iste iusto
              laudantium cupiditate, molestias ad cumque neque laboriosam totam.
              Architecto consequatur eligendi et, incidunt fuga, quisquam eius
              fugit iusto dolore totam obcaecati laudantium molestias alias
              accusamus distinctio rerum voluptatem illo! Voluptates doloremque
              et quod, consectetur numquam quidem vero? Voluptatibus error
              labore soluta doloremque saepe quo eveniet reiciendis quaerat vero
              ea, modi tempore similique repellendus autem quisquam, molestiae
              illo esse impedit quos magnam temporibus facere! In molestiae
              voluptates, quas consequuntur dicta, a veniam ipsa sunt ipsum
              fugit qui nesciunt blanditiis consequatur laudantium facere alias
              eaque. Autem pariatur qui libero magni quis repellendus vero
              dolores laudantium atque dolorem repudiandae velit maiores hic
              sapiente voluptate, adipisci distinctio explicabo quas cumque quae
              ratione molestias. Pariatur error repudiandae, quos fugiat beatae
              consectetur dolores sapiente aliquid facilis aspernatur nulla quod
              illum veniam quae aperiam quas ducimus! Pariatur, nihil. Ipsum
              adipisci consequatur doloremque natus porro iste temporibus labore
              unde fuga, reiciendis asperiores maiores, provident doloribus
              quidem amet! Deserunt unde nostrum laborum voluptate enim tenetur
              ad perspiciatis, eum, eligendi non natus iste accusamus maiores
              sint magni! Commodi eveniet libero molestias nemo, ipsam suscipit
              cupiditate mollitia accusantium at, provident pariatur aliquam
              neque. Ducimus incidunt voluptate reiciendis dolor nostrum, sequi
              modi quas similique id ullam magni odio quo cupiditate omnis ipsam
              perspiciatis tempora beatae repellendus ea, minima perferendis
              tempore commodi minus tenetur. Modi, aut. Placeat perspiciatis
              atque, reiciendis, velit ipsa itaque dolore ex voluptatum animi
              tenetur aut optio quos fuga, enim quia nobis illum autem maiores
              iusto. Quibusdam voluptates perspiciatis impedit, nihil,
              consectetur sapiente quam amet dolorem quisquam nemo veritatis?
              Esse enim ratione accusamus sunt nulla ad provident deleniti quo
              dolore aliquid? Dignissimos sit rem maxime soluta perferendis
              quibusdam ratione ab dolorum repellendus velit, nesciunt
              consectetur illum! Saepe dolorum hic modi, dolore omnis asperiores
              fuga quia consequatur dolor? Inventore dolorem enim magnam nihil
              animi dicta, nisi dolor sapiente nam adipisci similique tempore
              quis commodi minus fugit amet, magni labore ut cupiditate
              assumenda sint modi quaerat facilis harum. Vero harum provident
              qui aperiam ut magni eveniet corrupti architecto officia, incidunt
              nobis modi quod necessitatibus labore cum officiis tempore quas,
              excepturi iste, voluptates recusandae facilis aut possimus?
              Obcaecati, sapiente voluptas vero porro iure provident ipsam, quas
              culpa facilis quos esse harum nemo officiis nobis modi blanditiis
              voluptatem minus dolore consequuntur. Ullam voluptatum veniam
              reiciendis qui distinctio voluptatibus sint repudiandae.
            </Text>
          </MessageFrom>
        </Message>
        <MainBottom>
          <Form>
            <Input type="text" placeholder="Send a message" />
            <Button>
              <Img src={send} alt="sent button" />
            </Button>
          </Form>
          <Text txt="true">
            ChatGPT may produce inaccurate information about people, place, or
            facts. ChatGPT April 16 Version
          </Text>
        </MainBottom>
      </Wrapper>
    </Container>
  );
};

export default memo(Main);
