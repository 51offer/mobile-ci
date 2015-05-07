# mobile-ci
51offer 移动组持续集成工具 （ github + jenkins + fir.im + qiniu )

线上 mobile-ci-web 地址： http://7xiwmf.com1.z0.glb.clouddn.com/

持续集成规范约定：

    iOS版本：
        develop版本：
            短链接：51offeridev         每天build一次，build时间为00:00
        test版本：
            短链接：51offeritest        每小时build一次，build时间为整点一次
        publish版本：
            短链接：51offeriv2v2v3      每天build一次，build时间为01:00(v2v2v3代表版本号v2.2.3)


    Android版本：
        develop版本：
            短链接：51offeradev         每天build一次，build时间为03:10
        test版本：
            短链接：51offeratest        每小时build一次，build时间为XX:10
        publish版本：
            短链接：51offerav2v2v3      每天build一次，build时间为04:10(v2v2v3代表版本号v2.2.3)
