$.BEM.decl('b-table')
    .elem('cell', 'result', 'last')
        .onMethod('set',
            function($super, val) {
                return $super(val || Math.random());
            });
