import axios from "axios";

const PostData = ({email, name, phone, address, images, configurator_document}) => {

const siteUrl = 'https://www.superiorpro.com/';

axios.post(`${siteUrl}/wp-json/wp/v2/quote`, {
    email: email,
    name: name,
    phone: phone,
    address: address,
    images: images,
    configurator_document: configurator_document
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })

}

export default PostData;