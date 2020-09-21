function спроситьСемки (естьСемки) {
    try {
        if (естьСемки === true)
                console.log ('отдуши душевно') ;
            else if (естьСемки === false)
                throw new Error('ээ где семки') ;
     } catch (ошибочка) {
        console.log (ошибочка.message) ;
     }
     let семки = 'семки' ;
     return семки ;
}

спроситьСемки(false) ;