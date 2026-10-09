import { ProductItem } from '@/ProductType';

interface ProgressBarType{
    product: ProductItem | undefined
}

function ProgressBar({product} : ProgressBarType) {

    const priceChange =
    product?.yesterday !== undefined && product?.today !== undefined
      ? product.yesterday - product.today
      : 0;

  const priceIcon = product?.change?.pct === undefined ? (
              <span>তথ্য নেই</span>
            ) : product.change.pct === 0 ? (
              <span className="text-blue-700">
                ▬ {product.change.pct}%
              </span>
            ) : product.change.pct < 0 ? (
              <span className="text-green-700">
                ▼ {Math.abs(product.change.pct)}%
              </span>
            ) : (
              <span className="text-red-600">
                ▲ {Math.abs(product.change.pct)}%
              </span>
            )

  return (
    <div>
      <div className="flex justify-between items-center bg-white p-4 rounded-2xl">
        <div className="flex gap-2 items-center">
          
            <div className="bg-gray-300 p-2  rounded-xl flex justify-center items-center w-20 h-20 text-4xl">
              {product?.image}
            </div>
          <div>
            <h1 className="text-2xl font-bold ">{product?.nameBn}</h1>
            <p>প্রতি কেজি {product?.nameBn}</p>
            <p>
              গতকালের তুলনায় আজ দাম{" "}
              {product?.change.dir === "up" ? (
                <span className="font-bold text-red-500">{"বেড়েছে"}</span>
              ) : (
                <span className="font-bold text-green-500">{"কমেছে"}</span>
              )}{" "}
              <span className='text-blue-500 text-2xl'>{priceChange}</span> টাকা
            </p>
          </div>
        </div>

        <div className="bg-gray-200 px-5 py-3 rounded-2xl flex flex-col items-center">
          <h3>আজকের দাম </h3>
          <span className="text-4xl font-bold">{product?.today}</span>
          <h3>টাকা/কেজি </h3>
          <span className=" px-2 py-1 rounded-lg">
            {priceIcon}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
