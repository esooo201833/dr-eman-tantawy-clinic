===========================================
طريقة نسخ الصور من المجلد المحلي
===========================================

المسار المصدر: C:\Users\Eslam M.Salah\Desktop\matrial
المسار الهدف: dr-eman-tantawy-clinic\public\images

الخطوات:
========

1. افتح Command Prompt (CMD) كـ Administrator
2. انتقل لمجلد المشروع:
   cd "C:\Users\Eslam M.Salah\Desktop\dentistemantantawy\dr-eman-tantawy-clinic"

3. أنشئ مجلد images:
   mkdir public\images

4. انسخ الصور:
   xcopy "C:\Users\Eslam M.Salah\Desktop\matrial\*" "public\images\" /E /Y /I

===========================================
الصور المطلوبة واستخداماتها:
===========================================

اللوجو:
- 72124394_100624334685541_4040238940362375168_n-300x300.png

Hero Image (الصفحة الرئيسية):
- DSC00429-1536x1024.jpg

Before/After Gallery:
- DSC00210-HDR-Edit-scaled.jpg (Before)
- DSC00214-HDR-Edit-scaled.jpg (After)
- AdobeStock_216692392-min-1-1536x1097.jpeg (Before)
- AdobeStock_271677563-min-1536x1024.jpeg (After)
- AdobeStock_281626595-min-1-1536x1018.jpeg (Before)
- AdobeStock_286880598-min-1-1536x1025.jpeg (After)

الخدمات (Services):
1. Dental Implants: dentistry-innovation-1536x1024.jpeg
2. Veneers: AdobeStock_97836495-min-1-1536x1017.jpeg
3. Aligners: shutterstock_1327613177-min-1536x863.jpg
4. Dental Crowns: shutterstock_1382009423-min-1536x970.jpg
5. Root Canal: shutterstock_1536189467-min-1536x623.jpg
6. Dental Surgeries: shutterstock_1710517927-min-1536x437.jpg
7. Teeth Whitening: shutterstock_1741122377-min-1536x1152.jpg
8. Periodontics: shutterstock_1909236841-min-1536x1024.jpg
9. Orthodontics: AdobeStock_216692392-min-1-1536x1097.jpeg
10. Pedodontics: AdobeStock_271677563-min-1536x1024.jpeg
11. Digital Dentistry: AdobeStock_281626595-min-1-1536x1018.jpeg
12. All-on-4 & All-on-6: AdobeStock_286880598-min-1-1536x1025.jpeg

===========================================
ملاحظة:
تم تحديث ملف clinic-data.ts لاستخدام هذه الصور.
بعد نسخ الصور، شغل الموقع باستخدام:
   npm run dev
===========================================
