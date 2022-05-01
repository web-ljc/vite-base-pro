import { defineComponent } from "vue";
import '@styles/index.css';
import classes from '@styles/test.module.css'
import '@styles/test.less'

export default defineComponent({
  setup() {
    return () => {
      return (
        <>
          <div class={`root ${classes.moduleClass}`}>hello vue3</div>
          <div class='con'>con</div>
        </>
      )
    }
  }
})