import Header from "@/components/Header";
import Footer from "@/components/Footer";

const KVKKPage = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-8">
              KVKK AYDINLATMA METNİ
            </h1>
            
            <div className="prose prose-invert max-w-none space-y-6 text-white/90 text-sm md:text-base">
              <p className="leading-relaxed">
                LayerOne Mühendislik Makina Sanayi Limited Şirketi ("LayerOne" veya "Şirket") olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verilerinizin güvenliğine azami hassasiyet göstermekteyiz. Bu Aydınlatma Metni, kişisel verilerinizin işlenmesine ilişkin olarak sizleri bilgilendirmek amacıyla hazırlanmıştır.
              </p>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">1. Veri Sorumlusunun Kimliği</h2>
                <p className="leading-relaxed">Bu aydınlatma metni kapsamında veri sorumlusu:</p>
                <p className="leading-relaxed mt-2">
                  <strong>LayerOne Mühendislik Makina Sanayi Limited Şirketi</strong><br />
                  Web sitesi: www.layerone.tr.com
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">2. İşlenen Kişisel Veriler</h2>
                <p className="leading-relaxed mb-3">Web sitemiz üzerinden veya ticari faaliyetlerimiz kapsamında aşağıdaki kişisel veriler işlenebilmektedir:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Ad, soyad</li>
                  <li>Firma adı, ünvan</li>
                  <li>Telefon numarası</li>
                  <li>E-posta adresi</li>
                  <li>Adres bilgileri</li>
                  <li>Talep ve mesaj içerikleri</li>
                  <li>IP adresi ve web site kullanım bilgileri</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">3. Kişisel Verilerin İşlenme Amaçları</h2>
                <p className="leading-relaxed mb-3">Toplanan kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Teklif, proforma ve satış süreçlerinin yürütülmesi</li>
                  <li>Müşteri taleplerinin değerlendirilmesi ve iletişimin sağlanması</li>
                  <li>Üretim ve sevkiyat süreçlerinin planlanması</li>
                  <li>Sözleşme ve ticari yükümlülüklerin yerine getirilmesi</li>
                  <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                  <li>Hizmet kalitesinin artırılması</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">4. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h2>
                <p className="leading-relaxed mb-3">Kişisel verileriniz;</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                  <li>Web sitemizde yer alan iletişim formları</li>
                  <li>E-posta, telefon veya diğer iletişim kanalları</li>
                  <li>Ticari ilişkiler kapsamında sözlü, yazılı veya elektronik ortamlar</li>
                </ul>
                <p className="leading-relaxed mb-3">aracılığıyla toplanmakta olup, KVKK'nın 5. ve 6. maddelerinde belirtilen:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Bir sözleşmenin kurulması veya ifası</li>
                  <li>Hukuki yükümlülüklerin yerine getirilmesi</li>
                  <li>Veri sorumlusunun meşru menfaati</li>
                </ul>
                <p className="leading-relaxed mt-3">hukuki sebeplerine dayanılarak işlenmektedir.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">5. Kişisel Verilerin Aktarılması</h2>
                <p className="leading-relaxed mb-3">Kişisel verileriniz;</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Yetkili kamu kurum ve kuruluşlarına</li>
                  <li>Mali müşavirlik, hukuk ve danışmanlık hizmeti alınan üçüncü taraflara</li>
                </ul>
                <p className="leading-relaxed mt-3">yalnızca mevzuata uygun olarak ve gerekli hallerde aktarılmaktadır.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">6. Kişisel Verilerin Saklama Süresi</h2>
                <p className="leading-relaxed">
                  Kişisel verileriniz, ilgili mevzuatta öngörülen süreler boyunca veya işleme amacının gerektirdiği süre kadar saklanmakta; sürenin sona ermesi halinde mevzuata uygun şekilde silinmekte, yok edilmekte veya anonim hale getirilmektedir.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">7. KVKK Kapsamındaki Haklarınız</h2>
                <p className="leading-relaxed mb-3">KVKK'nın 11. maddesi uyarınca veri sahibi olarak;</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                  <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                  <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                  <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                  <li>Kanuna aykırı olarak işlenmişse silinmesini veya yok edilmesini isteme</li>
                  <li>İşlemenin sonuçlarına itiraz etme</li>
                </ul>
                <p className="leading-relaxed mt-3">haklarına sahipsiniz.</p>
                <p className="leading-relaxed mt-3">
                  Bu haklarınıza ilişkin taleplerinizi yazılı olarak veya web sitemizde yer alan iletişim kanalları aracılığıyla tarafımıza iletebilirsiniz.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">8. Yürürlük</h2>
                <p className="leading-relaxed">
                  İşbu Aydınlatma Metni, web sitemizde yayımlandığı tarih itibarıyla yürürlüğe girmiştir. Gerekli görülmesi halinde güncellenebilir.
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

export default KVKKPage;
