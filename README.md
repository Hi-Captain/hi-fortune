# hi-fortune
Make Lottery machine with React

### 랜덤 추첨기 만들기

> 2018.08.12
  - title : 초기 설정
  - content : create-react-app 생성, components 폴더 구성
  - idea : 선택장애가 오는 요즘.. hi-ce 와 hi-todo 의 스킬(?)들을 연결해서
           랜덤선택기를 한번 만들면 어떨까 하는 생각이 들었다.
           언젠가 추첨 이벤트에도 활용될 수 있지 않을까라는 생각에..
           프로젝트 조금 쉬면서 공부를 하려고 했지만.. 역시 그냥하는 공부는 지루하다.

> 2018.08.13
  - title : 기초 공사(?)
  - content : 일부 클래스형 컴포넌트 함수형 컴포넌트로 수정,
              typing, add, pick 기능 추가
  - idea : 일단 추첨에 필요한 기본적인 기능들을 넣어봤는데, 생각보다 잘 들어간거 같다.
           레이아웃 좀 고민해보고 CSS로 기본 골격 잡은 다음에 좀 더 재미있게 가지고 놀아보자.

> 2018.08.14
  - title : CSS
  - content : CSS파일 생성, 레이아웃 정리
              _PickItem 에서 돌리는 효과 설정
  - idea : 추가 기능 고민하면서 레이아웃이랑 메인컬러도 좀 더 고민해봐야겠다.

> 2018.08.15
- title : Fix CSS, Function
- content : bg 용량 줄이기,
            Pick 기능 Roll & Pick 으로 변경,
            AddItem 빈문자 입력 방지,
            AddItem 중복item 입력 방지,
            List overflow auto 설정,
            레이아웃 정리
- idea : List index 넣고 삭제기능 추가할 것.
         Proptype 활용하고 퍼포먼스 최적화 고민해보기.

> 2018.08.16
  - title : Decorate Item & Finish..?
  - content : Del 기능 추가,
              input placeholer 설정,
              중복값 경고문 수정,
              picked 값 애니매이션 설정,
              proptype 설정
  - idea : 다 된 것 같은데 .. 뭔가 조금 아쉬운데..?

> 2018.08.16
  - title : Finish !!
  - content : Clear 기능 추가,
              list 생성 순서 바꾸기,
              Rolling 중에 del, clear 방지,
              list 제한을 1에서 2로 변경,
              shouldComponentUpdate로 불필요한 렌더링 방지.
  - idea : 한번 돌리고나서 다시 할 때 리스트 초기화하는 기능이 없어서 추가했다.
           리스트 추가할 때 리스트가 많으면 추가가 잘 되는지 안보여서 내림차순으로 수정했다.
           Rolling중에 리스트가 삭제되면 이상해서(?) 해당기능을 방지했다.
           1개만 Rolling하는건 이상해서(?) 아이템 최소값을 2개로 수정했다.
           크롬개발자도구 리액트 확장프로그램을 활용하니 렌더링 되는 부분을 
           실시간으로 좀 더 시각적으로 보기 편하게 확인할 수 있었다.
           불필요한 렌더링을 방지하기 위해서 컴포넌트들의 형태를 필요에 따라 재조정했다.
           이런 소규모에서는 큰 의미는 없겠지만, 그래도 공부한 부분이니깐 적용해봤다.
           최근 리덕스를 공부하고 있지만 아직까지 제대로 이해가 되지 않아서
           프로젝트에 활용하기에는 무리가 있을 것 같다. 
           다음 프로젝트는 시간이 걸리더라도 확실히 리덕스를 이해한 뒤에
           이를 활용할 수 있는 프로젝트로 구상해봐야겠다.