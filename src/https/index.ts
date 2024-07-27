import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw?utm_medium=email&_hsenc=p2ANqtz-8h_mK_ErG82Rc3ZP0SD-6xjcE6lnpYskoDZJWf-nnIvXMfP7uJ7oCbh2yxPbIQsowi9RcApypluAlil5gOgNP0QlrnYQr7xirfu_krYxMyVJvCEWI&_hsmi=231361624&utm_content=231361624&utm_source=hs_automation'
});

export const resend = axios.create({
  baseURL: 'https://api.resend.com'
})