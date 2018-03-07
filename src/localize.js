const language = {
  location: sessionStorage.getItem('language') ? sessionStorage.getItem('language') : 'eng',
  title: {
    eng: 'DataAlliance',
    kor: '데이터얼라이언스'
  },
  routes: {
    overview: {
      eng: 'overview',
      kor: '개요'
    },
    stats: {
      eng: 'stats',
      kor: '통계'
    },
    datastatus: {
      eng: 'Data Status',
      kor: '데이터 현황'
    },
    typography: {
      eng: 'typography',
      kor: '타이포그라피'
    },
    icons: {
      eng: 'icons',
      kor: '아이콘'
    },
    maps: {
      eng: 'maps',
      kor: '지도'
    },
    detail: {
      eng: 'details',
      kor: '상세정보'
    },
    notifications: {
      eng: 'notifications',
      kor: '알람'
    }
  },
  nav_bar: {
    title: {
      eng: 'Toggle Navigation',
      kor: '네비게이션'
    },
    stats: {
      eng: 'stats',
      kor: '통계'
    },
    notifications: {
      eng: 'notifications',
      kor: '알람'
    },
    settings: {
      eng: 'settings',
      kor: '설정'
    }
  },
  side_bar: {
    dashboard: {
      eng: 'dashboard',
      kor: '개요'
    },
    profile: {
      eng: 'user profile',
      kor: '프로필'
    },
    datastatus: {
      eng: 'Data Status',
      kor: '데이터 현황'
    },
    typography: {
      eng: 'typography',
      kor: '타이포그라피'
    },
    icons: {
      eng: 'icons',
      kor: '아이콘'
    },
    maps: {
      eng: 'maps',
      kor: '지도'
    },
    notifications: {
      eng: 'notifications',
      kor: '알람'
    }
  },
  profile: {
    user_name: {
      eng: 'KB Lee',
      kor: '이광범'
    },
    user_role: {
      eng: 'CEO',
      kor: '대표이사'
    },
    user_email: {
      eng: 'velojazz@data-alliance.com',
      kor: 'velojazz@data-alliance.com'
    },
    member_title: {
      eng: 'Team Members',
      kor: '팀 맴버'
    },
    members: {
      eng: [
        {
          image: 'static/img/faces/ks.png',
          name: 'KS Lee',
          status: 'VP'
        },
        {
          image: 'static/img/faces/hoon.png',
          name: 'Hoon Park',
          status: 'CTO'
        }
      ],
      kor: [
        {
          image: 'static/img/faces/ks.png',
          name: '이기수',
          status: '부대표'
        },
        {
          image: 'static/img/faces/hoon.png',
          name: '박훈병',
          status: '기술이사'
        }
      ]
    },
    profile_title: {
      eng: 'Edit Profile',
      kor: '프로필 수정'
    },
    profile_company: {
      eng: 'Company',
      kor: '회사'
    },
    profile_username: {
      eng: 'Username',
      kor: '이름'
    },
    profile_email: {
      eng: 'E-Mail',
      kor: '이메일'
    },
    profile_firstname: {
      eng: 'First Name',
      kor: '이름'
    },
    profile_lastname: {
      eng: 'Last Name',
      kor: '성'
    },
    profile_address: {
      eng: 'Address',
      kor: '주소'
    },
    profile_city: {
      eng: 'City',
      kor: '도시'
    },
    profile_country: {
      eng: 'Country',
      kor: '국가'
    },
    profile_postcode: {
      eng: 'Postal Code',
      kor: '우편번호'
    },
    profile_aboutme: {
      eng: 'About Me',
      kor: '소개'
    },
    profile_update: {
      eng: 'Update Profile',
      kor: '프로필 수정 적용'
    },
    profile_userinfo: {
      eng: {
        company: 'DataAlliance',
        username: 'KB Lee',
        email: 'velojazz@data-alliance.com',
        lastName: 'Lee',
        address: 'Seoul, Republic of Korea',
        city: 'Seoul',
        postalCode: '',
        aboutMe: 'Many a little makes a mickle. I believe in transparent value creation and its fair distribution through IoT data from individuals. People who believe in this value have gathered at Data Alliance.'
      },
      kor: {
        company: '데이터얼라이언스',
        username: '이광범',
        email: 'velojazz@data-alliance.com',
        lastName: '이',
        address: '대한민국 서울특별시',
        city: '서울특별시',
        postalCode: '',
        aboutMe: '작은 것들이 모여 큰 것을 만듭니다. 저는 가치창출은 투명해야 하며 개인에게서 수집한 IoT데이터는 공평하게 분배되어야 한다고 생각합니다. 이러한 가치를 믿는 분들과 데이터얼라이언스는 함께 합니다.'
      }
    }
  },
  detail_list: {
    table_title: {
      eng: 'DA Apartment',
      kor: '데이터얼라이언스 아파트'
    },
    table_subtitle: {
      eng: 'C-D, B-dong, A-gu, Seoul',
      kor: '서울특별시 A구 B동 C-D'
    },
    columns: {
      'eng': ['INDEX', 'DeviceName', 'Lati/Long', 'Target', 'Last updated', 'Action'],
      'kor': ['순차', '장치명', '위/경도', '타겟', '최근갱신시간', '액션']
    }
  },
  tablelist: {
    tableA_title: {
      eng: 'Stripped Table',
      kor: '스트라이프 카드 테이블'
    },
    tableA_subtitle: {
      eng: 'Here is a subtitle for this table',
      kor: '테이블의 요약정보 영역'
    },
    tableB_title: {
      eng: 'Table on Plain Background',
      kor: '배경 없는 테이블'
    },
    tableB_subtitle: {
      eng: 'Here is a subtitle for this table',
      kor: '테이블의 요약정보 영역'
    }
  },
  maps: {
    mapnameA: {
      eng: 'Devices Location',
      kor: '장치 위치정보'
    },
    mapnameB: {
      eng: 'Device Name : ',
      kor: '장치명 : '
    }
  },
  overview: {
    card: {
      service: {
        eng: 'service',
        kor: '서비스'
      },
      location: {
        eng: 'location',
        kor: '대상장소'
      },
      last_device_updated_ttl: {
        eng: 'last device status updated time',
        kor: '마지막 장치 상태 업데이트 시간'
      }
    },
    cardModal: {
      device_id: {
        eng: 'DeviceID',
        kor: '디바이스 이름'
      },
      last_status_updated: {
        eng: 'last updated',
        kor: '마지막 업데이트'
      },
      last_status_updated_ttl: {
        eng: 'last device info updated time',
        kor: '마지막 장치 정보 업데이트 시간'
      },
      name: {
        eng: 'Service Name',
        kor: '서비스 이름'
      },
      location: {
        eng: 'Service Location',
        kor: '서비스 위치'
      },
      cpu_spec: {
        eng: 'CPU SPEC',
        kor: 'CPU 스팩'
      },
      cpu_usage: {
        eng: 'CPU used/total',
        kor: 'CPU사용량 used/total'
      },
      memory_usage: {
        eng: 'Memory used/total',
        kor: '메모리사용량 used/total'
      },
      disk_usage: {
        eng: 'Disk used/total',
        kor: '저장공간사용량 used/total'
      },
      ip: {
        eng: 'IP',
        kor: 'IP'
      },
      boot_time: {
        eng: 'Booting Time',
        kor: '최초부팅시간'
      },
      sensor_information: {
        eng: 'Sensors Information',
        kor: '센서 정보'
      },
      type: {
        eng: 'Type',
        kor: '장치타입'
      },
      sensing_stat: {
        eng: 'Sensoring Status',
        kor: '정보취득 상태'
      },
      update_sensor_stat: {
        eng: 'Update Status',
        kor: '정보전송 상태'
      },
      last_sensor_update: {
        eng: 'Last Updated',
        kor: '최근갱신시간'
      },
      close_btn: {
        eng: 'Close',
        kor: '닫기'
      }
    },
    statsCards: {
      eng: [
        {
          type: 'warning',
          icon: 'ti-server',
          title: 'Capacity',
          value: '105GB',
          footerText: 'Updated now',
          footerIcon: 'ti-reload'
        },
        {
          type: 'success',
          icon: 'ti-wallet',
          title: 'Revenue',
          value: '$1,345',
          footerText: 'Last day',
          footerIcon: 'ti-calendar'
        },
        {
          type: 'danger',
          icon: 'ti-pulse',
          title: 'Errors',
          value: '23',
          footerText: 'In the last hour',
          footerIcon: 'ti-timer'
        },
        {
          type: 'info',
          icon: 'ti-twitter-alt',
          title: 'Followers',
          value: '+45',
          footerText: 'Updated now',
          footerIcon: 'ti-reload'
        }
      ],
      kor: [
        {
          type: 'warning',
          icon: 'ti-server',
          title: '용량',
          value: '105GB',
          footerText: '갱신',
          footerIcon: 'ti-reload'
        },
        {
          type: 'success',
          icon: 'ti-wallet',
          title: '수익',
          value: '₩ 1,345',
          footerText: '하루 전',
          footerIcon: 'ti-calendar'
        },
        {
          type: 'danger',
          icon: 'ti-pulse',
          title: '오류',
          value: '23',
          footerText: '한시간 전',
          footerIcon: 'ti-timer'
        },
        {
          type: 'info',
          icon: 'ti-twitter-alt',
          title: '팔로워',
          value: '+45',
          footerText: '갱신',
          footerIcon: 'ti-reload'
        }
      ]
    },
    userChart: {
      title: {
        eng: 'Users behavior',
        kor: '사용자 액션'
      },
      subTitle: {
        eng: '24 Hours performance',
        kor: '24시간 액션 수'
      },
      reload: {
        eng: 'Updated 3 minutes ago',
        kor: '3분 전 업데이트'
      },
      targets: [
        {
          eng: 'Open',
          kor: '시작'
        },
        {
          eng: 'Click',
          kor: '클릭 수'
        },
        {
          eng: 'Click Second Time',
          kor: '초당 클릭 수'
        }
      ]
    },
    sales: {
      title: {
        eng: 'Last year Sales',
        kor: '전년도 판매액'
      },
      subTitle: {
        eng: 'All products including Taxes',
        kor: '세금포함 모든 상품군의 판매액'
      },
      reload: {
        eng: 'Data information certified',
        kor: '최종승인된 내역 기준'
      },
      targets: [
        {
          eng: 'Tesla Model S',
          kor: '테슬라 모델 S'
        },
        {
          eng: 'BMW 5 Series',
          kor: 'BMW 5 시리즈'
        }
      ]
    },
    emailStatistics: {
      title: {
        eng: 'Email Statistics',
        kor: '이메일 통계'
      },
      subTitle: {
        eng: 'Last campaign performance',
        kor: '최근 발송까지의 통계'
      },
      reload: {
        eng: 'Campaign set 2 days ago',
        kor: '이틀 전 발송내역까지'
      },
      targets: [
        {
          eng: 'Open',
          kor: '확인'
        },
        {
          eng: 'Bounce',
          kor: '반송'
        },
        {
          eng: 'Unsubscribe',
          kor: '미확인'
        }
      ]
    }
  },
  cardList: {
    modal: {
      name: {
        eng: 'DeviceName',
        kor: '장치명'
      },
      location: {
        eng: 'Location',
        kor: '위치'
      },
      mnft: {
        eng: 'Manufacturer',
        kor: '제조사'
      },
      desc: {
        eng: 'Description',
        kor: '설명'
      },
      owner: {
        eng: 'Owner',
        kor: '등록자'
      },
      lastpacket: {
        eng: 'LastPacketID',
        kor: '최근 패킷 ID'
      },
      lastupdated: {
        eng: 'LastUpdated',
        kor: '최근 업데이트'
      },
      lati: {
        eng: 'latitude',
        kor: '위도'
      },
      long: {
        eng: 'longitude',
        kor: '경도'
      },
      close: {
        eng: 'Close',
        kor: '닫기'
      },
      buttons: {
        day: {
          eng: 'DAY',
          kor: '일'
        },
        week: {
          eng: 'WEEK',
          kor: '주'
        },
        month: {
          eng: 'MONTH',
          kor: '월'
        }
      }
    },
    detail: {
      eng: 'Detail',
      kor: '상세'
    },
    map: {
      eng: 'Map',
      kor: '지도'
    },
    flow: {
      eng: 'Flow',
      kor: '흐름'
    }
  },
  notifications: {
    title: {
      eng: 'Notifications',
      kor: '알람'
    },
    styles: {
      eng: 'Notifications Style',
      kor: '알람 스타일'
    },
    states: {
      eng: 'Notification states',
      kor: '상태별 알람'
    },
    places: {
      eng: 'Notifications Places',
      kor: '알람 위치'
    }
  }
}

const Language = function (n1, n2, n3) {
  var name = ''
  if (n1 === 'set') {
    language.location = n2
    sessionStorage.setItem('language', n2)
    location.reload()
    return null
  }
  if (n1 == null && n2 == null) {
    name = n3 == null ? language['location'] : language[n3]
  } else {
    name = n2 == null ? language[n1][language.location] : language[n1][n2][language.location]
  }
  return name
}

export default Language
