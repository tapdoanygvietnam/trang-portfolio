# Web profile Nguyễn Thu Trang

Website tĩnh (HTML, CSS, JS), không cần build. Đưa lên Vercel trong vài phút.

## Trước khi đưa lên
1. Thêm ảnh chân dung: đặt file `trang.jpg` (vuông, khoảng 600x600px) vào thư mục `assets/`. Chưa có ảnh thì trang tự hiện chữ "TT".
2. Sau khi Vercel cấp tên miền, thay `YOUR-DOMAIN.vercel.app` trong `index.html` (4 chỗ: canonical, og:url, og:image, twitter:image) bằng tên miền thật. Có tên miền riêng thì dùng tên miền đó.

## Cách 1: kéo thả (nhanh nhất)
1. Vào https://vercel.com, đăng nhập.
2. Add New, Project, chọn "Deploy" từ thư mục hoặc dùng Vercel CLI bên dưới.

## Cách 2: Vercel CLI
```
npm i -g vercel
cd trang-portfolio
vercel          # lần đầu, làm theo hướng dẫn
vercel --prod   # đưa lên bản chính thức
```

## Cách 3: qua GitHub
Đẩy thư mục này lên một repo GitHub, vào Vercel chọn Import Git Repository. Framework chọn "Other", để trống Build Command và Output Directory.

## Kiểm tra sau khi lên
- Dán link vào Facebook Sharing Debugger hoặc Zalo để xem ảnh chia sẻ.
- Mở bằng điện thoại để kiểm tra giao diện.
