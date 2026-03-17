import { Header } from '@/components/layout/Header'
import { Banner } from '@/components/layout/Banner'
import { Categories } from '@/components/layout/Categories'
import { Partners } from '@/components/layout/Partners'
import { Brands } from '@/components/layout/Brands'
import { Newsletter } from '@/components/layout/Newsletter'
import { Footer } from '@/components/layout/Footer'
import { ProductShelf } from '@/components/product/ProductShelf'
import { ProductModal } from '@/components/modal/ProductModal'
import { useProducts, useModal } from '@/hooks'

export default function App() {
  const { data: products = [], isLoading, isError } = useProducts()
  const { selectedProduct, isOpen, openModal, closeModal } = useModal()

  const shelfProps = {
    products,
    isLoading,
    isError,
    onOpenModal: openModal,
  }

  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <Header />

      <main id="main-content" role="main">
        <Banner />
        <Categories />

        <ProductShelf title="Produtos relacionados" showTabs {...shelfProps} />

        <Partners />

        <ProductShelf title="Produtos relacionados" {...shelfProps} />

        <Partners />

        <Brands />

        <ProductShelf title="Produtos relacionados" {...shelfProps} />
      </main>

      <Newsletter />
      <Footer />

      {isOpen && selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </>
  )
}
