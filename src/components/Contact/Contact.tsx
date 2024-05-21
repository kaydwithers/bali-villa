import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";
import { Input } from "../Input/Input";
import { Layout } from "../Layout/Layout";
import { TextArea } from "../TextArea/TextArea";

export const Contact = () => {
  return (
    <Layout id="contact">
      <Heading>Contact us</Heading>

      <div className="flex justify-center">
        <div className="w-full lg:w-[40vw]">
          <form>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="flex flex-col gap-y-12">
                  <Input
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                  />

                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                  />

                  <TextArea
                    label="Message"
                    type="message"
                    placeholder="Your message"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button type="submit">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
