<template class="q-pa-md q-gutter-md">
    <q-card-section>Message:{{ msg }}</q-card-section>
    <q-separator/>

    <q-card-section>Using text interpolation: {{ rawHtml }}</q-card-section>
    <q-card-section>Using v-html directive: <span v-html="rawHtml"></span></q-card-section>
    <q-separator />

    <q-card-section>
    <q-btn
      unelevated
      color="primary"
      type="a"
      target="_blank"
      v-bind:id="linkId"
      v-bind:href="link.to"
      :title="link.title"
      :label="link.label"
    ></q-btn>
    </q-card-section>
    <q-separator />

    <q-card-section>
    <q-btn :disable="isButtonDisabled" label="버튼 보이기"></q-btn>
    </q-card-section>
    <q-separator />

    <q-card-section>
    {{ number + 1 }}
    </q-card-section>
    <q-separator />
    <q-card-section>{{ ok ? "YES" : "NO" }}</q-card-section>
    <q-separator />
    <q-card-section>
      {{ message.split("").reverse().join("") }}
    </q-card-section>
    <q-separator />
    <q-card-section :id="`list-${id}`"> list-{{ id }} </q-card-section>
    <q-separator />

    <!-- 이것은 표현식이 아니라 선언식입니다: -->
    <!--{{ var a = 1 }}-->

    <!-- 흐름 제어도 작동하지 않습니다. 삼항 표현식을 사용하십시오. -->
    <!--{{ if (ok) { return message } }}-->

    <q-card-section class="text-h6">
      {{ calculateDate() }}
    </q-card-section>
    <q-separator />

    <q-card-section v-if="!seen"> Now you see me </q-card-section>
    <q-card-section v-else> on no! </q-card-section>
    <q-separator />
    <q-btn @click="awesome = !awesome" label="toggle"></q-btn>
    <q-card-section v-if="awesome"> Vue is awesome! </q-card-section>
    <q-card-section v-else> on no! </q-card-section>
    <q-separator />
    <q-card-section v-if="type == 'A'"> A </q-card-section>
    <q-card-section v-else-if="type === 'B'"> B </q-card-section>
    <q-card-section v-else-if="type === 'C'"> C </q-card-section>
    <q-card-section v-else> Not A/B/C </q-card-section>
    <q-separator />

    <!--<a v-bind:href="url"> ... </a>-->
    <!-- 단축 문법 -->
    <!--<a :href="url"> ... </a>-->

    <!--<a v-on:click="doSomething"> ... </a>-->
    <!-- 단축 문법 -->
    <!--<a @click="doSomething"> ... </a>-->

    <!--<a v-bind:[attributeName]="url"> ... </a>-->
    <!-- 단축 문법 -->
    <!--<a :[attributeName]="url"> ... </a>-->

    <!--<a v-on:[eventName]="doSomething"> ... </a>-->
    <!-- 단축 문법 -->
    <!--<a @[eventName]="doSomething">-->

    <!-- 이렇게 하면 컴파일러 경고가 트리거됩니다. -->
    <!--<a :['foo' + bar]="value"> ... </a>-->

    <div class="q-pa-md row items-start">
      <q-btn @click="increment" label="카운트" color="primary"></q-btn>
      <q-card-section>methodCount is: {{ methodCount }}</q-card-section>
    </div>
    <q-separator />

    <q-card-section>
      <q-input v-model="inputData"
        outlined
        bottom-slots
        label="DebounceEx"
        counter
        :dense="true"
      />
    </q-card-section>
    <q-separator/>

  	<q-card-section>책을 가지고 있다: {{ publishedBooksMessage }}</q-card-section>
  	<q-separator />

    <q-card-section>책을 가지고 있다: {{ calculateBooksMessage() }}</q-card-section>
    <q-separator />

    <q-card-section class="text-h6">
      {{ toTitleDate }}
      {{ calculateDate() }}
    </q-card-section>
    <q-separator />

    <q-card-section class="text-h6">
      {{ fullName }}
    </q-card-section>
    <q-separator />

    <q-card-section :class="{acitve:isActive, 'text-h3' : hasError}">change color</q-card-section>


    <q-card-section class="static" :class="{active:isActive, 'text-h3': hasError}"> change color</q-card-section>
    <div class="static active"></div>

    <q-card-section :class="classObject"> change color</q-card-section>

    <q-card-section :class="classObj"> change color</q-card-section>


    <q-card-section :class="[activeClass, errorClass]"> change color</q-card-section>
    <div class="active text-danger"></div>

    <q-card-section :class="[isActive ? activeClass :'', errorClass]"> change color</q-card-section>

    <q-card-section :class="[{active:isActive}, errorClass]"> change color</q-card-section>

    <!-- 컴포넌트가 사용될 때  -->
    <class-child></class-child>
    <!-- 컴포넌트가 사용시 클래스 추가 -->
    <class-child :class="[baz, boo]"></class-child>
    <!-- 컴포넌트가 사용시 active 클래스 추가 -->
    <class-child :class="{ active: isActive }"></class-child>

    <div class="foo bar"></div>
    <div class="foo bar baz boo"></div>
    <div class="foo bar active"></div>

    <!-- MyComponent 템플릿에서 $attrs 속성을 사용  :id="$attrs.id" 추가 -->
    <q-card-section :class="{foo:true, bar:true}" :id="$attrs.id">안녕!</q-card-section>
    <class-child id="hi"></class-child>
    <div class="foo bar" id="hi"></div>

    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
    <q-card-section :style="styleObject"> change color</q-card-section>

    <q-card-section :style="[baseStyles, overridingStyles]"> change color</q-card-section>

    <!-- <div :style="{ display: ['flex', '-webkit-box', '-ms-flexbox'] }"></div> -->

    <q-card-section v-if="awesome"> Vue is awesome</q-card-section>

    <q-btn @click= "awesome = !awesome" label="toggle"></q-btn>
    <q-card-section v-if="awesome"> Vue is awesmoe! </q-card-section>
    <q-card-section v-else> on no! </q-card-section>

    <q-card-section v-if="type == 'A'"> A </q-card-section>
    <q-card-section v-else-if="type === 'B'"> B </q-card-section>
    <q-card-section v-else-if="type === 'C'"> C </q-card-section>
    <q-card-section v-else> Not A/B/C </q-card-section>

    <div class="q-pa-md row items-start q-gutter-md">
      <q-card v-if="ok" dark bordered class="bg-grey-9 my-card">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>
        <q-separator dark inset/>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore dolore magna aliqua.
        </q-card-section>
      </q-card>
    </div>

    <div class="q-pa-md row items-start q-gutter-md">
      <q-card
        v-show="ok"
        dark
        bordered
        class="my-card text=white"
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">vby John Doe</div>
        </q-card-section>
        <q-separator dark inset/>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore dolore magna aliqua.
        </q-card-section>
      </q-card>
    </div>

    <div class="q-pa-md">
      <q-list v-for="(item,idx) in listItems" :key="idx" bordered separator>
        <q-item clickable v-ripple>
          <q-time-section>{{  idx + 1 }}, {{  item.message }}</q-time-section>
        </q-item>
      </q-list>
    </div>
    <q-separator/>

    <div class="q-pa-md">
      <q-list v-for="(itme, index) in listItems" :key="index" bordered separator>
        <q-item clickable v-ripple>
          <q-item-section>
            {{ parentMessage }} - {{ index + 1 }} - {{  itme.message }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <q-separator/>

    <!-- JavaScript 부분 내용-->

    <div class="q-pa-md">
      <q-list v-for="({message}, index) in listItems" :key="index" bordered separator>
        <q-item-section>{{ message }} - {{ index + 1 }}</q-item-section>
      </q-list>
    </div>
    <q-separator/>

    <div class="q-pa-md">
      <q-list v-for="(item, index) in tupleListItems" :key="index" bordered separator>
        <q-item clickable="clickable" v-ripple="v-ripple">
          <q-item-section v-for="(childItem, index) in item.children" :key="index">
            <q-item-section>{{ item.message }} - {{ childItem }}</q-item-section>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <q-separator/>


    <div class="q-pa-md">
      <q-list v-for="({message}, index) of listItems" :key="index" bordered separator>
        <q-item clickable v-ripple>
          <q-item-section>{{ message }} - {{ index }}</q-item-section>
         </q-item>
      </q-list>
    </div>
    <q-separator />

    <!--
      v-for="(value, key) in myObject"
      v-for="(value, key, index) in myObject"
    -->
    <div class="q-pa-md">
      <q-list
        v-for="(value, key, index) in myObject"
        :key="index"
        bordered
        separator
      >
        <q-item clickable v-ripple>
          <q-item-section
            >{{ index + 1 }}. {{ key }} : {{ value }}</q-item-section
          >
        </q-item>
      </q-list>
    </div>
    <q-separator />

    <div class="q-pa-md row items-start">
      <q-list v-for="n in 10" :key="n" bordered separator>
        <q-item clickable v-ripple>
          <q-item-section>{{ n }}</q-item-section>
        </q-item>
      </q-list>
    </div>
    <q-separator />

    <div class="q-pa-md items-start">
      <my-component
        v-for="(item, index) in listItems"
        :key="index"
        :item="item"
        :index="index"
      ></my-component>
    </div>
    <q-separator />

    <q-card-section>{{ filterItems }}</q-card-section>

    <q-list v-for="n in evenNumbers" :key="n" bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>{{ n }}</q-item-section>
      </q-item>
    </q-list>

    <q-list v-for="(numbers, index) in sets" :key="index" bordered separator>
      <q-item v-for="n in even(numbers)" :key="n" clickable v-ripple>
        <q-item-section><q-item-label class="text-h6 text-weight-bolder text-center">{{ n }}</q-item-label></q-item-section>
      </q-item>
    </q-list>

    <q-card-section>{{ reverseNumbers }}</q-card-section>

    <div class="q-pa-md row items-start">
      <q-btn @click="count++" label="카운트" color="primary"></q-btn>
      <q-card-section>Count is: {{ count }}</q-card-section>
    </div>
    <q-separator />

    <div class="q-pa-md row items-start">
      <!--https://quasar.dev/quasar-plugins/notify#introduction -->
      <q-btn
        @click="greet"
        label="greet"
        color="secondary"
        class="q-ma-sm"
      ></q-btn>
      <!--https://quasar.dev/quasar-plugins/dialog#introduction-->
      <q-btn label="Alert" color="primary" @click="alert" class="q-ma-sm" />
      <q-btn label="Confirm" color="primary" @click="confirm" class="q-ma-sm" />
      <q-btn label="Prompt" color="primary" @click="prompt" class="q-ma-sm" />
    </div>
    <q-separator />

      <div class="q-pa-md row items-start">
      <q-btn
        @click="say('안녕')"
        label="안녕이라고 말하기"
        color="secondary"
        class="q-ma-sm"
      ></q-btn>
      <q-btn
        @click="say('잘가')"
        label="잘가라고 말하기"
        color="secondary"
        class="q-ma-sm"
      ></q-btn>
    </div>

    <div class="q-pa-md row items-start">
      <q-btn
        @click="warn('아직 양식을 제출할 수 없습니다.', $event)"
        label="아직 양식을 제출할 수 없습니다."
        color="secondary"
        class="q-ma-sm"
      ></q-btn>
      <q-btn
        @click="(event) => warn('아직 양식을 제출할 수 없습니다1.', event)"
        label="아직 양식을 제출할 수 없습니다1"
        color="secondary"
        class="q-ma-sm"
      ></q-btn>
    </div>
    <q-separator />

    <div class="q-pa-md row items-start">
    <!-- 클릭 이벤트 전파가 중지됩니다. -->
      <q-btn label="stop" color="primary" @click.stop="doThis" class="q-ma-sm" />

    <!-- submit 이벤트가 더 이상 페이지 리로드하지 않습니다. -->
      <q-form
        label="prevent"
        color="primary"
        @submit.prevent="doThis"
        class="q-ma-sm"
      >
        <q-input v-model="name" />
        <q-btn label="submit" type="submit"></q-btn>
      </q-form>

    <!-- 수식어를 연결할 수 있습니다. -->
    <q-btn
      label="stopPrevent"
      color="primary"
      @click.stop.prevent="doThis()"
      class="q-ma-sm"
    />

    <!-- 이벤트에 핸들러 없이 수식어만 사용할 수 있습니다. -->
    <q-form
      label="prevent"
      color="primary"
      @submit.prevent
      class="q-ma-sm"
    >
      <q-input v-model="name" />
      <q-btn label="submit" type="submit"></q-btn>
    </q-form>

    <!-- event.target이 엘리먼트 자신일 경우에만 핸들러가 실행됩니다. -->
    <!-- 예를 들어 자식 엘리먼트에서 클릭 액션이 있으면 핸들러가 실행되지 않습니다. -->

    <q-btn label="self" color="primary" @click.self="doThis" class="q-ma-sm" />
    </div>

    <!-- 이벤트 리스너를 추가할 때 캡처 모드 사용 -->
    <!-- 내부 엘리먼트에서 클릭 이벤트 핸들러가 실행되기 전에, 여기에서 먼저 핸들러가 실행됩니다. -->
    <div @click.capture="doThis">...</div>

    <!-- 클릭 이벤트는 단 한 번만 실행됩니다. -->
    <a @click.once="doThis"></a>

    <!-- 핸들러 내 `event.preventDefault()`가 포함되었더라도 -->
    <!-- 스크롤 이벤트의 기본 동작(스크롤)이 발생합니다.        -->
    <div @scroll.passive="onScroll">...</div>

    <!-- `key`가 `Enter`일 때만 `submit`을 호출합니다 -->
    <input @keyup.enter="submit" />

    <input @keyup.page-down="onPageDown" />

    <!-- Alt + Enter -->
    <input @keyup.alt.enter="clear" />

    <!-- Ctrl + Click -->
    <div @click.ctrl="doSomething">시작하기</div>

    <!-- Ctrl과 함께 Alt 또는 Shift를 누른 상태에서도 클릭하면 실행됩니다. -->
    <button @click.ctrl="onClick">A</button>

    <!-- 오직 Ctrl만 누른 상태에서 클릭해야 실행됩니다. -->
    <button @click.ctrl.exact="onCtrlClick">A</button>

    <!-- 시스템 입력키를 누르지 않고 클릭해야지만 실행됩니다. -->
    <button @click.exact="onClick">A</button>

    <q-card-section class="col-4">
      <q-input
        outlined
        bottom-slots
        v-model.lazy="text"
        label="Label"
        counter
        :dense="true"
      >
        <template v-slot:prepend>
          <q-icon name="place"/>
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="text = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint> Field hint </template>
      </q-input>
    </q-card-section>

    메세지 입력하기 : {{ text }}
    <q-input
            outlined
            bottom-slots
            v-model.lazy="text"
            label="Label"
            counter
            :dense="true"
          > 
            <template v-slot:prepend>
              <q-icon name="place"/>
            </template>
            <template v-slot:append>
              <q-icon name="close" @click="text = ''" class="cursor-pointer" />
            </template>

            <template v-slot:hint> Field hint </template>
          </q-input>
          <q-separator/>

    <input v-model="text">
    <q-separator/>

    <span>여러 줄 메세지:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <textarea v-model="message" placeholder="여러 줄을 추가해보세요"></textarea>
    <q-separator/>

    <!-- 올바른 사례 -->
    <textarea v-model="text"></textarea>
    <q-separator/>

    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
    <q-separator/>

    <div>체크된 이름: {{ checkedNames }}</div>

    <input type="checkbox" id="jack" value="젝" v-model="checkedNames">
    <label for="jack">젝</label>

    <input type="checkbox" id="john" value="존" v-model="checkedNames">
    <label for="john">존</label>

    <input type="checkbox" id="mike" value="마이크" v-model="checkedNames">
    <label for="mike">마이크</label>
    <q-separator/>

    <div>선택한 것: {{ picked }}</div>

    <input type="radio" id="one" value="하나" v-model="picked" />
    <label for="one">하나</label>

    <input type="radio" id="two" value="둘" v-model="picked" />
    <label for="two">둘</label>
    <q-separator/>

    <div>선택됨: {{ selected }}</div>

    <select v-model="selected">
      <option disabled value="">다음 중 하나를 선택하세요</option>
      <option>가</option>
      <option>나</option>
      <option>다</option>
    </select>
    <q-separator/>

    <div>선택됨: {{ selected }}</div>

    <select v-model="selected" multiple>
      <option>가</option>
      <option>나</option>
      <option>다</option>
    </select>
    <q-separator/>

    <!--v-bind:key 값을 넣어줘야 함.-->
    <select v-model="selected">
      <option v-for="option in options" :value="option.value" v-bind:key="option">
        {{ option.text }}
      </option>
    </select>

    <div>선택됨: {{ selected }}</div>
    <q-separator/>

    <!-- `picked`는 선택 시 문자열 "가"입니다. -->
    <input type="radio" v-model="picked" value="가" />

    <!-- `toggle`은 true 또는 false입니다. -->
    <input type="checkbox" v-model="toggle" />

    <!-- `selected`는 첫 번째 옵션이 선택될 때 문자열 "한글"입니다. -->
    <select v-model="selected">
      <option value="한글">한글</option>
    </select>
    <q-separator/>

    <input
    type="checkbox"
    v-model="toggle"
    true-value="네"
    false-value="아니오" />
    <q-separator/>

    <input
    type="checkbox"
    v-model="toggle"
    :true-value="dynamicTrueValue"
    :false-value="dynamicFalseValue" />
    <q-separator/>

    <input type="radio" v-model="pick" :value="first" />
    <input type="radio" v-model="pick" :value="second" />
    <q-separator/>

    <select v-model="selected">
    <!-- 인라인 객체 리터럴 -->
    <option :value="{ number: 123 }">123</option>
    </select>
    <q-separator/>

    <!-- "input" 대신 "change" 이벤트 후에 동기화됨 -->
    <input v-model.lazy="msg" />
    <q-separator/>

    <input v-model.number="age" />
    <q-separator/>

    <p>
      예/아니오 질문:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
    <q-separator/>

    <input ref="input" />
    <q-separator/>

    <ul>
      <li v-for="item in list" ref="items" v-bind:key="item">
        {{ item }}
      </li>
    </ul>
    <q-separator/>

    <input :ref="(el) => { /* el을 속성이나 ref에 할당 */ }">
    <q-separator/>

    <Child ref="child" />
    <q-separator/>

    <h1>아래에 자식 컴포넌트가 있습니다.</h1>
    <ButtonCounter />
    <q-separator/>

    <h1>여기에 많은 자식 컴포넌트가 있습니다!</h1>
    <ButtonCounter />
    <ButtonCounter />
    <ButtonCounter />
    <q-separator/>

    <AlertBox>
      나쁜 일이 일어났습니다.
    </AlertBox>
    <q-separator/>

    <div class="alert-box">
    <strong>이것은 데모용 에러입니다.</strong>
    <slot />
    </div>
    <q-separator/>

    <component :is="currentTab"></component>
    <q-separator/>

    <div :style="{ fontSize: postFontSize + 'em' }">
      <BlogPost
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        @enlarge-text="postFontSize += 0.1"
      />
    </div>

    <div class="blog-post">
    <h4>{{ title }}</h4>
    <button>텍스트 확대</button>
    </div>
    <q-separator/>


    
</template>

<script>
import {date} from 'quasar'
import {nextTick} from 'vue'
import {debounce} from 'lodash'
import ClassChild from "components/ClassChild.vue"
import Child from './Child.vue'
import ButtonCounter from './ButtonCounter.vue'
import BlogPost from './BlogPost.vue'
export default {
    name: "VueEx",
    components: {
      components: { ClassChild }, // 추가
      Child,
      ButtonCounter
    },
    data() {
        return {
          msg: "hello Vue",

          rawHtml: `<span style="color: red">빨간색이어야 합니다.</span>`,
          
          linkId: "vue",
	        link: {
	        to: "http://vuejs.org",
	        title: "뷰 공식 사이트",
	        label: "Vuejs.org",
	        },

          isButtonDisabled: true,

          number: 1000,
          message:
            "지금까지 템플릿의 단순한 속성만 있었습니다. 그러나 Vue는 실제로 모든 데이터가 내에서 JavaScript 강화의 모든 기능을 지원합니다.",
          id: "genie",

          seen: true,
          awesome: true,
          type: "B",

          methodCount: 1,

          obj: {
            nested: { count: 0 },
            arr: ['foo', 'bar']
          },

          inputData:'',

          author: {
            name: 'John Doe',
            books: [
              'Vue 2 - Advanced Guide',
              'Vue 3 - Basic Guide',
              'Vue 4 - The Mystery'
            ]
          },

          str:'',

          firstName: 'John',
          lastName: 'Doe',

          isActive: true,
          hasError: false,

          classObject: {
            active: true,
            'text-h3': false
          },

          isAcitve: true,
          error: null,

          activeClass: 'active',
          errorClass: 'text-danger',

          activeColor: 'red',
          fontSize: 30,

          styleObject: {
            color: 'red',
            fontSize: '13px'
          },

          baseStyles:{
            textDecorationLine:'underline',
            textDecorationThickness: '5px',
            textDecorationColor: 'red',
          },
          overridingStyles:{
            color:'blue',
            fontSize:'35px',
          },

          awesome: true,
          type: "B",

          ok: true,

          listItems: [{ message: "Foo"}, { message: "Bar"}],

          parentMessage: 'Parent',
          listItems: [{ message: "Foo"}, { message: "Bar"}],

          tupleListItems: [{ message: "Foo", children:["baby"]}, { message: "Bar", children:['child'] }],

          myObject: {
            title: 'Vue에서 목록을 작성하는 방법',
            author: '홍길동',
            publishedAt: '2016-04-10'
          },

		      items: [{ message: "Foo" }, { message: "Bar"}],

          numbers: [1, 2, 3, 4, 5],

          sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]],

          count: 0,

          name: "Vue.js",

          text: "",

          checkedNames: [],

          selected: '1',
          options: [
            { text: '하나', value: '1' },
            { text: '둘', value: '2' },
            { text: '셋', value: '3' }
          ],

          question: '',
          answer: '질문에는 일반적으로 물음표가 포함됩니다.',

          list: [
            /* ... */
          ],

          posts: [
            { id: 1, title: 'Vue와 함께한 나의 여행' },
            { id: 2, title: 'Vue로 블로깅하기' },
            { id: 3, title: 'Vue가 재미있는 이유' }
          ],

          postFontSize: 1

        }
    },
    computed: {
      publicshedBooksMessage() {
        return this.author.books.length > 0 ? 'Yes' : 'No'
      },

      publishedBooksMessage() {
        // `this`는 컴포넌트 인스턴스를 가리킵니다.
        return this.author.books.length > 0 ? 'Yes' : 'No'
      },

      toTitleDate() {
        const timeStamp = Date.now();
        const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm");
        return formattedString;
      },

      fullName: {
        // getter
        get() {
          return this.firstName + ' ' + this.lastName
        },
        // setter
        set(newValue) {
          // 참고: 분해 할당 문법을 사용함.
          [this.firstName, this.lastName] = newValue.split(' ')
        }
      },

      classObj() {
        return {
          active: this.isAcitve && !this.error,
          'text-h3' : this.error && this.error.type === 'fatal'
        }
      },

      filterItems() {
        return (this.items = this.items.filter((item) =>
          item.message.match(/Foo/)
        ));
      },

      evenNumbers() {
        return this.numbers.filter(n => n % 2 === 0)
      },


    },
    watch: {
      inputData: debounce(function(newVal,oldVal){
	      // 처리로직 작성
	      console.log(newVal,oldVal);
	    },500),

      question(newQuestion, oldQuestion) {
        if (newQuestion.includes('?')) {
          this.getAnswer()
        }
      },

      someObject: {
        handler(newValue, oldValue) {
          // 참고:
          // someObject가 다른 객체로 교체되지 않는 한,
          // newValue와 oldValue는 같습니다.
          // 둘 다 동일한 객체를 참고하고 있기 때문입니다!
        },
        deep: true
      },

      question: {
        handler(newQuestion) {
          // 이제 컴포넌트 생성 시
          // `beforeCreate`와 `created` 훅 사이에
          // 한 번 실행됩니다.
        },
        // 열성적으로 콜백 실행
        immediate: true
      },

      key: {
        handler() {},
        flush: 'post'
      },

      count: {
        handler(val, preVal) {
          console.log('변경이 감지됨!', val, preVal)
        },
        flush: 'sync'
      },

      

    },
    mounted() {
      /*
      console.log(this.methodCount)

      this.methodCount = 2
      console.log(this.methodCount)
      */

      this.increment(),

      this.error = {},
      this.error.type = 'fatal';

      this.$refs.input.focus()

      console.log(this.$refs.items)
    },
    created() {
    // 이제 각 인스턴스는 자체적인 디바운스된 핸들러를 가집니다.
    this.debouncedClick = _.debounce(this.click, 500)

    this.$watch('question', (newQuestion) => {
      // ...
    })

    //const unwatch = this.$watch('foo', callback)
    // ...나중에 감시자가 더 이상 필요하지 않을 때:
    //unwatch()
    },
    unmounted() {
      // 컴포넌트가 제거된 후 
      // 타이머를 취소하는 것은 좋은 방법입니다.
      this.debouncedClick.cancel()
    },
    methods: {
        calculateDate() {
          const timeStamp = Date.now();
          const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm");
          return formattedString;
        },
        calculateDate() {
          setInterval(()=>{
            const timeStamp = Date.now();
            const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm:ss");
            this.str = formattedString;
          }, 1000);
          return this.str; // binding 되는 변수 필요
        },

        increment() {
          this.methodCount++
          nextTick(() => {

          })
        },

        mutateDeeply() {
          this.obj.nested.count++
          this.obj.arr.push('baz')
        },

        mutateDeeply() {
          // 변경 사항이 감지됩니다.
          this.obj.nested.count++
          this.obj.arr.push('baz')
        },

        /*
        click: debounce(function () {
          // ... 클릭에 응답 ...
        }, 500),*/
        click() {

        },

        calculateBooksMessage() {
          return this.author.books.length > 0 ? 'Yes' : 'No'
        },

        even(numbers) {
          return numbers.filter(number => number % 2 === 0)
        },

        reverseNumbers() {
          const numbers = this.numbers;
          return [...numbers].reverse();
        },

        greet(e) {
          // `this`는 메서드가 활성화된 현재 인스턴스를 가리킵니다.
          this.$q.notify({
            message: `hello ${this.name}!`,
            caption: "5 minutes ago",
            color: "secondary",
          });
        },

        say(message) {
          alert(message)
        },

        warn(message, event){
          if (event) {
            event.preventDefault();
            this.$q
            .dialog({
              title: "Alert",
              message: `${message}`,
            })
            .onOk(() => {
              // console.log('OK')
            })
            .onCancel(() => {
              // console.log('Cancel')
            })
            .onDismiss(() => {
              // console.log('I am triggered on both OK and Cancel')
            });
          }
        },

        async getAnswer() {
          this.answer = '생각 중...'
          try {
            const res = await fetch('https://yesno.wtf/api')
            this.answer = (await res.json()).answer === 'yes' ? '네' : '아니오'
          } catch (error) {
            this.answer = '에러! API에 연결할 수 없습니다. ' + error
          }
        },

        increment() {
          this.count++
          // 이어서 callback이 실행됨
          this.count++
          // 역시 callback이 실행됨
          this.count++
          // 또 callback이 실행됨
        },


    }
}
</script>

<style scoped>
  .active{
    color:red;
  }

  #hi{
  font-size:3em;
  color:darkorchid;
  }

  .my-card {
    width: 100%;
    max-width: 250px;
  }

  .alert-box {
    /* ... */
    color:darkorchid;
  }
</style>