export const CustomerInfo = () => {
  return (

    <div className="w-full p-10">
      <div className="flex w-full justify-start text-xl mb-6">
        <p className="w-64">배송지 정보</p>
        <div className="">
          <p>username</p>
          <p>address</p>
        </div>
      </div>
      <div className="flex text-xl justify-start">
        <p className="w-64">배송 요청사항</p>
        <p>
          셀렉트로 배송요청사항 고르게하기
        </p>
      </div>
    </div>
  )
}
