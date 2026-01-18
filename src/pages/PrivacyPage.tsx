import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-8">
              GİZLİLİK POLİTİKASI
            </h1>
            
            <div className="prose prose-invert max-w-none space-y-6 text-white/90 text-sm md:text-base">
              <p className="leading-relaxed">
                İşbu Gizlilik Politikası ("Gizlilik Politikası"), 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, LayerOne Mühendislik Makina Sanayi Limited Şirketi'nin ("LayerOne" veya "Şirket") resmi internet sitesi olan www.layerone.tr.com ("İnternet Sitesi") üzerinden sunulan içeriklerin; kullanıcılar, ziyaretçiler ve ilgili kişiler ("İlgili Kişi") tarafından kullanımı sırasında, LayerOne ile paylaşılan veya İnternet Sitesi kullanımı kapsamında elde edilen kişisel verilerin işlenmesine, saklanmasına ve aktarılmasına ilişkin usul ve esasları belirlemek amacıyla hazırlanmıştır.
              </p>

              <p className="leading-relaxed">
                Kişisel verileriniz, KVKK hükümleri uyarınca, LayerOne tarafından veri sorumlusu sıfatıyla, aşağıda açıklanan kapsam ve amaçlar doğrultusunda işlenmektedir. KVKK uyarınca anonim hâle getirilen veriler kişisel veri niteliğini kaybettiğinden, bu verilere ilişkin işleme faaliyetleri işbu Gizlilik Politikası hükümlerine tabi olmaksızın gerçekleştirilebilir.
              </p>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Kişisel Verilerin İşlenme Amaçları</h2>
                <p className="leading-relaxed">
                  LayerOne, İnternet Sitesi aracılığıyla elde edilen kişisel verileri; sunulan ürün ve hizmetlerin geliştirilmesi, iyileştirilmesi ve sunulabilmesi; teklif, üretim, satış ve sevkiyat süreçlerinin yürütülmesi; kullanıcı taleplerinin, şikâyetlerinin ve mesajlarının değerlendirilmesi ve kullanıcı ile iletişime geçilebilmesi; kullanıcıya daha kaliteli, güvenli ve kişiye özel hizmet sunulabilmesi; pazarlama ve bilgilendirme faaliyetlerinin yürütülmesi (ilgili kişinin açık rızasının bulunması hâlinde); İnternet Sitesi güvenliğinin sağlanması, teknik hataların giderilmesi, kullanıcı deneyiminin geliştirilmesi; raporlama, analiz, iş geliştirme ve kurumsal planlama faaliyetlerinin yürütülmesi; hukuki yükümlülüklerin yerine getirilmesi ve yasal mercilerden gelen taleplerin karşılanması amaçlarıyla, KVKK'nın 5. ve 6. maddelerinde belirtilen hukuki sebepler çerçevesinde işlemektedir.
                </p>
                <p className="leading-relaxed mt-4">
                  KVKK'nın 5. maddesinin ikinci fıkrası ve 6. maddesinin üçüncü fıkrasında belirtilen şartlardan birinin varlığı hâlinde, kişisel veriler, ilgili kişinin açık rızası aranmaksızın işlenebilecektir.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">İşlenen Kişisel Veriler</h2>
                <p className="leading-relaxed mb-3">İlgili Kişi'nin İnternet Sitesi'ni kullanımı kapsamında aşağıdaki kişisel veriler işlenebilmektedir:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Kimlik bilgileri</li>
                  <li>İletişim bilgileri</li>
                  <li>Firma ve ünvan bilgileri</li>
                  <li>Talep, mesaj ve şikâyet bilgileri</li>
                  <li>Site içi hareket ve kullanım bilgileri</li>
                  <li>IP adresi ve log kayıtları</li>
                  <li>Hukuki işlem ve işlem güvenliği bilgileri</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Bu veriler, İnternet Sitesi'nin işletilmesi ve sunulan hizmetlerin yürütülmesi için gerekli olduğu ölçüde işlenmektedir.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Kişisel Verilerin Aktarılması</h2>
                <p className="leading-relaxed mb-3">Kişisel verileriniz; yukarıda belirtilen amaçlarla sınırlı olmak kaydıyla, yürürlükteki mevzuata uygun olarak;</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Yetkili kamu kurum ve kuruluşlarına</li>
                  <li>Mali müşavirlik, hukuk, denetim ve danışmanlık hizmeti alınan üçüncü taraflara</li>
                  <li>Teknik altyapı, yazılım, barındırma (hosting) ve bilişim hizmeti sağlayıcılarına</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  aktarılabilir. Kişisel veriler, KVKK'nın 9. maddesinde öngörülen şartlara uygun olarak ve gerekli güvenlik tedbirleri alınmak suretiyle aktarılmaktadır.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Çerezler (Cookies)</h2>
                <p className="leading-relaxed">
                  İnternet Sitesi'nde, kullanıcı deneyimini geliştirmek, hizmetlerin etkin şekilde sunulmasını sağlamak ve site kullanımını analiz etmek amacıyla çerezler kullanılmaktadır. Çerezler, İlgili Kişi'nin cihazında saklanan küçük veri dosyalarıdır.
                </p>
                <p className="leading-relaxed mt-4">
                  İlgili Kişi, tarayıcı ayarları aracılığıyla çerez kullanımını reddedebilir veya çerezler konusunda uyarı almayı tercih edebilir. Ancak bu durumda İnternet Sitesi'nin bazı işlevleri sınırlı çalışabilir.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Kişisel Verilerin Saklama Süresi</h2>
                <p className="leading-relaxed">
                  Kişisel veriler; işlenme amacının ortadan kalkması, ilgili mevzuatta öngörülen saklama sürelerinin sona ermesi veya hizmetin ifası için gerekli sürenin dolması hâllerinde; KVKK ve ilgili mevzuata uygun olarak silinir, yok edilir veya anonim hâle getirilir. Kişisel veriler yalnızca olası hukuki uyuşmazlıklarda delil teşkil etmesi veya ilgili bir hakkın kullanılabilmesi amacıyla saklanabilir.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">İlgili Kişi'nin Hakları</h2>
                <p className="leading-relaxed mb-3">KVKK'nın 11. maddesi uyarınca İlgili Kişi;</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Kişisel verilerinin işlenip işlenmediğini öğrenme</li>
                  <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                  <li>İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme</li>
                  <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde düzeltilmesini isteme</li>
                  <li>Kanuna aykırı işlenmişse silinmesini veya yok edilmesini talep etme</li>
                  <li>İşlenen verilerin otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
                  <li>Kanuna aykırı işleme nedeniyle zarara uğraması hâlinde zararın giderilmesini talep etme</li>
                </ul>
                <p className="leading-relaxed mt-3">haklarına sahiptir.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Başvuru Yöntemi</h2>
                <p className="leading-relaxed">
                  İlgili Kişi, KVKK kapsamındaki taleplerini, İnternet Sitesi'nde yer alan iletişim kanalları aracılığıyla veya yazılı olarak LayerOne'a iletebilir. Başvurular, talebin niteliğine göre en kısa sürede ve en geç otuz gün içerisinde sonuçlandırılır.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Politika Değişiklikleri</h2>
                <p className="leading-relaxed">
                  LayerOne, işbu Gizlilik Politikası'nı mevzuat değişiklikleri veya hizmet kapsamındaki güncellemeler doğrultusunda, önceden bildirimde bulunmaksızın değiştirme hakkını saklı tutar. Güncellenen metinler, İnternet Sitesi'nde yayımlandığı tarihte yürürlüğe girer.
                </p>
                <p className="leading-relaxed mt-4">
                  İlgili Kişi, İnternet Sitesi'ni kullanmakla işbu Gizlilik Politikası'nı okuduğunu, anladığını ve kişisel verilerinin burada belirtilen kapsamda işlenmesini kabul ettiğini beyan eder.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
