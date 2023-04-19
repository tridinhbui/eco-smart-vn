export const API_SOURCE = "https://lazy-hare-bracelet.cyclic.app";
//export const API_SOURCE = "http://localhost:8080";
export const ADMIN_LOGIN_API = API_SOURCE+"/user/login";
export const REFRESH_TOKEN_API = API_SOURCE+"/user/refresh";
export const ADD_POST_API = API_SOURCE+"/post/add-post";
export const GET_POST_API = API_SOURCE+"/post/get-post";
export const UPDATE_POST_API = API_SOURCE+"/post/update-post";
export const DELETE_POST_API = API_SOURCE+"/post/delete-post";
export const ADD_PRODUCT_API = API_SOURCE+"/product/add-product"
export const GET_PRODUCT_API = API_SOURCE+"/product/get-product";
export const GET_BRAND_API = API_SOURCE+"/product/get-brand";
export const DELETE_IMAGE_API = API_SOURCE+"/product/remove-image";
export const ADD_IMAGE_API = API_SOURCE+"/product/add-image";
export const UPDATE_PRODUCT_API = API_SOURCE+"/product/update-product"

export const ABOUT_HOMEPAGE = [
  { icon: 'fa-solid fa-person-chalkboard', title: 'Chi phí tối ưu', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' },
  { icon: 'fa-solid fa-person-chalkboard', title: 'Đội nhóm chuyên nghiệp', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' },
  { icon: 'fa-solid fa-person-chalkboard', title: 'Sứ mệnh cao cả', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' }
]

export const TITLE_ABOUTHOME = 'Sự khác biệt của Eco Smart Solutions'

export const CUSTOMER_HOMEPAGE = {
  title: 'Đội ngũ cố vấn - bảo trợ',
  list_customer: [
    {
      id: 1,
      content: 'Ngay từ khi đọc bản đề xuất kinh doanh của Eco Smart Solutions, chúng tôi đã cảm thấy những tác động tích cực mà ESS sẽ đem lại cho đất nước Việt Nam. Đặc biệt, khi được làm việc với Trí, tôi cảm thấy tầm nhìn, sự nhiệt huyết, đam mê, và tinh thần trách nhiệm cao, điều mà quyết định rất lớn đến quyết định đầu tư của chúng tôi', 
      name: 'Jody Emmings', 
      info: 'Giám đốc Trung tâm Khởi nghiệp và Sáng tạo Macalester - Minnesota, Hoa Kỳ', 
      img: 'https://ecosmart.netlify.app/static/img/customer/customer_1.png' 
    }, 
    { 
      id: 2,
      content: 'Giải pháp hỗ trợ thúc đẩy kinh doanh cho các doanh nghiệp phát triển bền vững của Eco Smart Solutions là một mô hình kinh doanh bền vững và có tính hiệu quả cao, góp phần tham gia vào các chính sách phát triển bền vững của xã hội mà chính phủ đang đề ra.', 
      name: 'Bùi Tôn Hiến', 
      info: 'Cục trưởng cục Khoa học Lao Động và Xã Hội, Bộ Lao Động Thương Binh và Xã hội, trực tiếp chỉ đạo chính sách phát triển bền vững của Chính Phủ Việt Nam', 
      img: 'https://ecosmart.netlify.app/static/img/customer/customer_2.png' 
    }
  ]
}

export const ACHIEVE_HOMEPAGE = {
  title: 'Thành Tích Của Chúng Tôi',
  list_modal: [{ amount: '35+', title: 'Members' }, { amount: '100+', title: 'Products sold' }, { amount: '35+', title: 'Regions' }, { amount: '13000+', title: 'Reach' },]
}

export const SPONSORS_HOMEPAGE = {
  title: 'Một Số Đối Tác Nổi Bật',
  icon_sponsors: ['https://ecosmart.netlify.app/static/img/sponsor/sponsor1-logo.png', 'https://ecosmart.netlify.app/static/img/sponsor/sponsor2-logo.png', 'https://ecosmart.netlify.app/static/img/sponsor/sponsor3-logo.png', 'https://ecosmart.netlify.app/static/img/sponsor/sponsor4-logo.png', 'https://ecosmart.netlify.app/static/img/sponsor/sponsor5-logo.png', 'https://ecosmart.netlify.app/static/img/sponsor/sponsor6-logo.png', 'https://ecosmart.netlify.app/static/img/sponsor/sponsor7-logo.png', 'https://ecosmart.netlify.app/static/img/sponsor/sponsor8-logo.png']
}

export const PRODUCT_HOMEPAGE = {
  title: 'Sản phẩm nổi bật',
  list_product: [
    { img: 'https://ecosmart.netlify.app/static/img/products/product_page_1.jpg', details: ['▪ Dầu dưỡng Hoàng Lan 90.000 VND', '▪ Hồng nhuận da, chống lão hoá, duy trì nét thanh xuân', '▪ Tăng sức đề kháng, bồi bổ sức khỏe, giúp ngủ ngon', '▪ Ích trí, bổ huyết, định thần'] },
    { img: 'https://ecosmart.netlify.app/static/img/products/product_page_2.jpg', details: ['▪ Dầu dưỡng Hoàng Lan 90.000 VND', '▪ Hồng nhuận da, chống lão hoá, duy trì nét thanh xuân', '▪ Tăng sức đề kháng, bồi bổ sức khỏe, giúp ngủ ngon', '▪ Ích trí, bổ huyết, định thần'] },
    { img: 'https://ecosmart.netlify.app/static/img/products/product_page_3.jpg', details: ['▪ Dầu dưỡng Hoàng Lan 90.000 VND', '▪ Hồng nhuận da, chống lão hoá, duy trì nét thanh xuân', '▪ Tăng sức đề kháng, bồi bổ sức khỏe, giúp ngủ ngon', '▪ Ích trí, bổ huyết, định thần'] }
  ],
}

export const SLIDE_SHOW_HOMEPAGE = {
  title: 'Ấn phẩm truyền thông',
  list_img: ['https://ecosmart.netlify.app/static/img/activities/activities4.jpg', 'https://ecosmart.netlify.app/static/img/activities/activities5.jpg', 'https://ecosmart.netlify.app/static/img/activities/activities6.jpg', 'https://ecosmart.netlify.app/static/img/activities/activities7.jpg', 'https://ecosmart.netlify.app/static/img/activities/activities1.jpg', 'https://ecosmart.netlify.app/static/img/activities/activities2.jpg', 'https://ecosmart.netlify.app/static/img/activities/activities3.jpg']
}

export const YOUTUBE_HOMEPAGE = {
  title: 'Tại sao nên thúc đẩy các sản phẩm phát triển bền vững',
  youtube: "https://www.youtube.com/embed/-HS-slU-XTc"
}

export const FOOTER_HOMEPAGE = {
  title_contact: 'Liên hệ',
  eco_vn: 'Eco Smart Vietnam',
  eco_smart: 'Eco Smart Solutions',
  keep_contact: 'Thông tin liên hệ',
  slogan: 'Đội ngũ Eco Smart Solutions luôn đặt tôn chỉ Hiệu quả - Tôn trọng - Chuyên nghiệp luôn cố gắng hoạt động vì mục tiêu kiến tạo một thế giới bền vững.',
  next_page: ['Trang Chủ', 'Về Chúng Tôi', 'Liên Hệ']
}

export const MAP = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59601.78673198879!2d105.73427935820311!3d20.98816030000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad55ee9769e7%3A0x441e0d383ae32492!2zQ2h1bmcgY8awIFgxIEjhuqEgxJHDrG5o!5e0!3m2!1sen!2s!4v1678719653143!5m2!1sen!2s'

export const ADDRESS = {
  name: 'Tên: Bùi Đình Trí',
  phone: 'Phone: (+84) 868 855 505',
  address: 'Địa chỉ: Nhà 28, ngách 1/6, ngõ 140 Nguyễn Xiển, quận Thanh Xuân, thành phố Hà Nội',
  email: 'Email: ecosmart.vietnam@gmail.com'
}

export const ABOUTUS_PAGE = {
  awareness_aboutus: {
    title: 'Nhận thức, sứ mệnh và tầm nhìn',
    list_awareness: [
      {
        img: 'https://ecosmart.netlify.app/static/img/aboutus/aware1.jpg',
        list_content: ['In 10 centuries, a new plastic bottle will decompose.', '100 years from now, 1 plastic bag will leave this earth.', 'But...', 'Humanity discharges 3.5 million tons of garbage every day.', ' "Each year, Vietnamese people emit about 1.8 million tons of plastic waste."']
      },
      {
        img: 'https://ecosmart.netlify.app/static/img/aboutus/aware2.jpg',
        list_content: ['If now, inaction, then when?', '"A few years later, when that pile of garbage has not yet decomposed, will humanity eat on the garbage heap, sleep on the garbage pile, and drown in the ocean of garbage?"']
      },
      {
        img: 'https://ecosmart.netlify.app/static/img/aboutus/mission.jpg',
        list_content: [' Eco Smart Solutions is committed to 2 main MISSIONS and VISIONS:',
          '- Raising Vietnamese awareness of environmental protectionx activities',
          '- Promote the development of sustainable products.',
          'With CORE VALUES:',
          '- Effectiveness: Actionable results.',
          '- Respect: Listening, sincerity and humility',
          '- Professionalism: Discipline, professionalism and quality'
        ]
      },
      {
        img: 'https://ecosmart.netlify.app/static/img/aboutus/history.jpg',
        list_content: ['With those things, ECO SMART SOLUTIONS was born.', '"In 2022-2024, Eco Smart Solutions operates with the vision of becoming one of the leading active student organizations in the North acting for the environment. In particular, ESS is apioneer in promoting the development of environmentally friendlyproducts."']
      }
    ],
  },
  executive_aboutus: {
    title: 'Ban Điều Hành',
    list_excutive: [
      { name: 'Ms. Mai Thu Thủy', img: 'https://ecosmart.netlify.app/static/img/aboutus/coo.jpg', position: 'Trưởng phòng Hành chính - Nhân sự' },
      { name: 'Mr. Bùi Đình Trí', img: '	https://ecosmart.netlify.app/static/img/aboutus/president.png', position: 'Giám đốc điều hành', info: 'Cử nhân song ngành Công nghệ Thông tin/Kinh tế Đầu tư Đại học Macalester, Minnesota, Hoa Kỳ' },
      { name: 'Mr. Phan Huy Hoàng', img: 'https://ecosmart.netlify.app/static/img/aboutus/cco.png', position: 'Giám đốc công nghệ', info: 'Thạc sĩ Công nghệ Thông tin Đại học Depaul, Chicago, Hoa Kỳ' },
      { name: 'Lưu Phan Phương Linh', img: 'https://ecosmart.netlify.app/static/img/aboutus/headbus.jpg', position: 'Giám đốc kinh doanh' },
      { name: 'Ngô Châu Anh', img: 'https://ecosmart.netlify.app/static/img/aboutus/headrd.jpg', position: 'Trưởng phòng nghiên cứu và phát triển' },
      { name: 'Nguyễn Minh Khuê', img: 'https://ecosmart.netlify.app/static/img/aboutus/headmarcom.jpg', position: 'Trưởng phòng Marketing' }
    ]
  },
  ourteam_aboutus: {
    title: 'Câu chuyện của Eco Smart Solutions',
    img: 'https://ecosmart.netlify.app/static/img/aboutus/founder.jpg',
    founder: 'Người sáng lập Eco Smart Solutions - Mr. Bùi Đình Trí',

    list_content: {
      title_question: 'Để hình thành và phát triển một dự án, sự đóng góp của tổng giám đốc là vô cùng quan trọng. Hôm nay hãy cùng chúng tôi tìm hiểu về người sáng lập ra Eco Smart Solutions - anh Bùi Đình Trí qua những thông tin phỏng vấn dưới đây để hiểu thêm nhiều thông tin thú vị về Eco Smart. Hãy bắt đầu nào!',
      list_questions: [
        { question: 'Câu 1: Giới thiệu và kể 3 điều thú vị về bản thân anh.', answer: 'Anh Trí: Hiện tại tôi đang là du học sinh học 2 chuyên ngành Khoa học Máy tính và Kinh tế ở Mỹ. Ba điều thú vị về tôi có lẽ là tôi thuận tay trái, liều lĩnh (nhưng trong tầm kiểm soát) và lười học (nhưng vẫn học tốt).' },
        { question: 'Câu 2: Anh Trí, cơ duyên nào đã đưa anh đến với việc thành lập Eco Smart Solutions?', answer: 'Anh Trí: Cái duyên có lẽ bắt nguồn từ việc tôi tham gia một trong những hoạt động thường niên của Trung tâm hỗ trợ khởi nghiệp dành cho doanh nhân và doanh nghiệp trẻ của trường tôi. Ban Khởi nghiệp và Đổi mới Sáng tạo của Macalester trao thưởng cho các bạn trẻ có ý tưởng, sáng kiến đặc biệt giúp cải thiện cuộc sống của cộng đồng xung quanh họ. Tôi đã may mắn giành được giải thưởng và Eco Smart Solutions là ý tưởng đã giúp tôi giành được giải thưởng đó (giải thưởng có tên ban đầu là Eco Heroes Campaign).' },
        { question: 'Câu hỏi 3: Anh có thể chia sẻ một chút về mục tiêu và kỳ vọng mà bạn đặt ra tại Eco Smart Solutions trong tương lai?', answer: 'Anh Trí: Như tôi chia sẻ, tôi là người có máu liều lĩnh nhưng trong tầm kiểm soát, vì vậy mục tiêu và kỳ vọng của tôi thường cân bằng giữa những điều xa vời và thực tế. Tôi thực sự kỳ vọng Eco Smart Solutions sẽ trở thành một trong những công ty tiền phong trong lĩnh vực phát triển sản phảm bền vững lớn nhất và chuyên nghiệp nhất ở khu vực miền Bắc. Tuy nhiên, trước mắt, Eco Smart chỉ cần lớn nhất ở trong Hà Nội thôi đã (chắc là lớn nhất trong Hà Nội là đứng thứ 2 hoặc thứ 3 toàn miền Bắc nhỉ?)' },
        { question: 'Câu hỏi 4: Anh có điều gì muốn nói với độc giả và những người theo dõi của dự án không?', answer: 'Anh Trí: Tôi chỉ muốn nói rằng Eco Smart Solutions là một dự án sẽ không mọi người phải thất vọng bởi vì với đội ngũ của Eco Smart chúng tôi - những người mà tôi tin là đầy tài năng và trách nhiệm - sẽ có thể giúp dự án phát triển và lan tỏa rộng rãi. Ngoài ra, chúng tôi cũng xin được cam kết luôn đặt tôn chỉ Hiệu quả - Tôn trọng - Chuyên nghiệp, luôn cố gắng hoạt động vì mục tiêu kiến tạo một thế giới bền vững!' },
      ]
    }
  }
}
