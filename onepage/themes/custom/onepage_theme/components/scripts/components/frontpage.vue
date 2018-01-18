<template>
    <div class="front-page">
        <menu-tree></menu-tree>
        <latest></latest>
        <project></project>
        <testimony></testimony>
        <detail-boxes></detail-boxes>
        <footer-block></footer-block>
        <div class="clear"></div>
    </div>
</template>

<script>
    import menuTree from './menu';
    import latest from './latest';
    import project from './project';
    import testimony from './testimony';
    import detailBoxes from './details';
    import footerBlock from './footer';

    export default {
        components: {menuTree, latest, project, testimony, detailBoxes, footerBlock}
    }
</script>
