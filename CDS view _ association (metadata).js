@Metadata.layer: #CUSTOMER   --CUSTOMER로 바꿔야 한다

annotate view YA03_CDS_WA_01 with
{
  --CDS VIEW 에서  Annotation을 적용하고 싶은 필드와 함꼐 annotation을 기록한다.
  
  @UI.selectionField: [{ position: 10 }]
  @UI.lineItem: [{ position: 10 }]
  @Consumption.filter.defaultValue: 'LH' //기본 설정 값을 LH로 주는 것
  @EndUserText.label: '항공사ID'
  Carrid;

  @UI.lineItem: [{ position: 20 }]
  @EndUserText.label: '항공사명'
  Carrname;
  
  @UI.lineItem: [{ position: 30 }]
  Connid;
  
  @UI.lineItem: [{ position: 40 }]
  @UI.selectionField: [{ position: 20 }] --두번째로 출력하기 위함
  @Consumption.filter.selectionType: #INTERVAL --달력이 뜬다
  Fldate;
  
  @UI.lineItem: [{ position: 50 }]
  Price;
  
  @UI.lineItem: [{ position: 60 }]
  Currency;
  
  @UI.lineItem: [{ position: 70 }]
  Paymentsum;
}