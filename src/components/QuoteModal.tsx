import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    kvkkConsent: false,
  });

  const isFormValid = 
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.message.trim() !== "" &&
    formData.kvkkConsent;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, kvkkConsent: checked }));
  };

  const handleFileSelect = (file: File) => {
    const validExtensions = ['.stl', '.obj', '.step', '.stp'];
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    
    if (validExtensions.includes(fileExtension)) {
      setSelectedFile(file);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleClose = () => {
    // Reset everything when closing
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      kvkkConsent: false,
    });
    setSelectedFile(null);
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div 
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-primary rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors z-10"
                aria-label="Kapat"
              >
                <X className="w-5 h-5 text-slate-900" />
              </button>

              {/* Content */}
              <div className="p-6 md:p-8">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    /* Success State */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      {/* Animated Checkmark */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 200, 
                          damping: 15,
                          delay: 0.2 
                        }}
                        className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6"
                      >
                        <motion.div
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <Check className="w-12 h-12 text-white" strokeWidth={3} />
                        </motion.div>
                      </motion.div>

                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-3xl font-bold text-slate-900 mb-4"
                      >
                        Teşekkürler!
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-slate-700 text-lg mb-8 max-w-md"
                      >
                        Talebiniz alındı en kısa sürede geri dönüş yapılacaktır.
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <Button
                          onClick={handleClose}
                          className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-3"
                        >
                          Kapat
                        </Button>
                      </motion.div>
                    </motion.div>
                  ) : (
                    /* Form State */
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Teklif Al!
                      </h2>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Row 1: First Name & Last Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName" className="text-slate-900 font-medium">
                              İsim
                            </Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              type="text"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                              className="bg-white border-0 text-slate-900 placeholder:text-slate-400 rounded-md focus:ring-2 focus:ring-slate-900"
                              placeholder="Adınız"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName" className="text-slate-900 font-medium">
                              Soyisim
                            </Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              type="text"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                              className="bg-white border-0 text-slate-900 placeholder:text-slate-400 rounded-md focus:ring-2 focus:ring-slate-900"
                              placeholder="Soyadınız"
                            />
                          </div>
                        </div>

                        {/* Row 2: Email & Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-slate-900 font-medium">
                              E-posta
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="bg-white border-0 text-slate-900 placeholder:text-slate-400 rounded-md focus:ring-2 focus:ring-slate-900"
                              placeholder="ornek@email.com"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-slate-900 font-medium">
                              Telefon
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              className="bg-white border-0 text-slate-900 placeholder:text-slate-400 rounded-md focus:ring-2 focus:ring-slate-900"
                              placeholder="+90 5XX XXX XX XX"
                            />
                          </div>
                        </div>

                        {/* Row 3: Message */}
                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-slate-900 font-medium">
                            Size nasıl yardımcı olabiliriz?
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={4}
                            className="bg-white border-0 text-slate-900 placeholder:text-slate-400 rounded-md resize-none focus:ring-2 focus:ring-slate-900"
                            placeholder="Projeniz hakkında detaylı bilgi veriniz..."
                          />
                        </div>

                        {/* File Upload Zone */}
                        <div className="space-y-2">
                          <Label className="text-slate-900 font-medium">
                            3D Model Dosyası (Opsiyonel)
                          </Label>
                          <div
                            onClick={() => fileInputRef.current?.click()}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            className={`
                              relative border-2 border-dashed rounded-lg p-6 cursor-pointer
                              transition-all duration-200 text-center
                              ${isDragging 
                                ? 'border-slate-900 bg-slate-900/10' 
                                : 'border-slate-400 bg-white/50 hover:border-slate-600 hover:bg-white/80'
                              }
                              ${selectedFile ? 'border-green-500 bg-green-50' : ''}
                            `}
                          >
                            <input
                              ref={fileInputRef}
                              type="file"
                              accept=".stl,.obj,.step,.stp"
                              onChange={handleFileInputChange}
                              className="hidden"
                            />
                            
                            {selectedFile ? (
                              <div className="flex items-center justify-center gap-3">
                                <Check className="w-5 h-5 text-green-600" />
                                <span className="text-slate-900 font-medium">{selectedFile.name}</span>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedFile(null);
                                  }}
                                  className="text-slate-500 hover:text-slate-700"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            ) : (
                              <>
                                <Upload className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                                <p className="text-slate-700 font-medium">
                                  3D Model Dosyanızı Yükleyin
                                </p>
                                <p className="text-slate-500 text-sm mt-1">
                                  (.stl, .step, .obj)
                                </p>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Row 4: KVKK Consent */}
                        <div className="flex items-start gap-3">
                          <Checkbox
                            id="kvkkConsent"
                            checked={formData.kvkkConsent}
                            onCheckedChange={handleCheckboxChange}
                            className="mt-1 border-slate-900 data-[state=checked]:bg-slate-900 data-[state=checked]:border-slate-900"
                          />
                          <Label
                            htmlFor="kvkkConsent"
                            className="text-sm text-slate-800 leading-relaxed cursor-pointer"
                          >
                            Kişisel Verilerin Korunması Kanunu uyarınca gerçekleştirilen 
                            ilgili Bilgilendirme'yi okudum.
                          </Label>
                        </div>

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          disabled={!isFormValid || isSubmitting}
                          className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                              <Loader2 className="w-5 h-5 animate-spin" />
                              GÖNDERİLİYOR...
                            </span>
                          ) : (
                            "GÖNDER"
                          )}
                        </Button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
