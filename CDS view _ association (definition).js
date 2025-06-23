/*

    view annotation

*/
@AbapCatalog.sqlViewName: 'YA03CDSWA01'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: '특강 ANNOTATION 활용예제'
@Metadata.ignorePropagatedAnnotations: true

//odata 생성
@OData.publish: true

//메타 데이터 허용
@Metadata.allowExtensions: true

define view YA03_CDS_WA_01

  --데이터 조회 대상

  as select from sflight

  --association
  association [1] to scarr as _Carrier on sflight.carrid = _Carrier.carrid

{
      @UI.lineItem: [{ position: 10 }]
      @EndUserText.label: '항공사ID'
      
      @Consumption.valueHelp: '_Carrier' --assocition을 많이 써줄 수록 더 많은 데이터를 가져올 수 있다.
  key carrid            as Carrid,
  key connid            as Connid,
  key fldate            as Fldate,
      
      @Semantics.amount.currencyCode: 'Currency'
      price             as Price,
      currency          as Currency,
      planetype         as Planetype,
      seatsmax          as Seatsmax,
      seatsocc          as Seatsocc,
      
      @Semantics.amount.currencyCode: 'Currency'
      paymentsum        as Paymentsum,
      seatsmax_b        as SeatsmaxB,
      seatsocc_b        as SeatsoccB,
      seatsmax_f        as SeatsmaxF,
      seatsocc_f        as SeatsoccF,

      @UI.lineItem: [{ position: 20 }]
      @EndUserText.label: '항공사명'
      _Carrier.carrname as Carrname,

      /** Exposed Association */
      _Carrier
}
