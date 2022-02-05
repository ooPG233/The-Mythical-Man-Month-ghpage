(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{414:function(v,_,p){"use strict";p.r(_);var t=p(56),s=Object(t.a)({},(function(){var v=this,_=v.$createElement,p=v._self._c||_;return p("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[p("h1",{attrs:{id:"第-12-章-干将莫邪-sharp-tools"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#第-12-章-干将莫邪-sharp-tools"}},[v._v("#")]),v._v(" 第 12 章 干将莫邪（Sharp Tools）")]),v._v(" "),p("p",[v._v("巧匠因为他的工具而出名。")]),v._v(" "),p("p",[v._v("——谚语")]),v._v(" "),p("p",[v._v("A good workman is known by his tools.")]),v._v(" "),p("p",[v._v("——PROVERB")]),v._v(" "),p("p",[v._v("就工具而言，即使是现在，很多软件项目仍然像一家五金店。每个骨干人员都仔细地保管自己工作生涯中搜集的一套工具集，这些工具成为个人技能的直观证明。正是如此，每个编程人员也保留着编辑器、排序、内存信息转储、磁盘实用程序等工具。")]),v._v(" "),p("p",[v._v("这种方法对软件项目来说是愚蠢的。首先，项目的关键问题是沟通，个性化的工具妨碍——而不是促进沟通。其次，当机器和语言发生变化时，技术也会随之变化，所有工具的生命周期是很短的。毫无疑问，开发和维护公共的通用编程工具的效率更高。")]),v._v(" "),p("p",[v._v("不过，仅有通用工具是不够的。专业需要和个人偏好同样需要很多专业工具。所以在前面关于软件开发队伍的讨论中，我建议为每个团队配备一名工具管理人员。这个角色管理所有通用工具，能指导他的客户－老板使用工具。同时，他还能编制老板需要的专业工具。")]),v._v(" "),p("p",[v._v("因此，项目经理应该制订一套策略，并为通用工具的开发分配资源。与此同时，他还必须意识到专业工具的需求，对这类工具不能吝啬人力和物力——这种企图的危害非常隐蔽。可能有人会觉得，将所有分散的人员集结起来，形成一个公共的工具小组，会有更高的效率。但实际上却不是这样。")]),v._v(" "),p("p",[v._v("项目经理必须考虑、计划、组织的工具到底有哪些呢？首先是计算机设施。它需要硬件和使用安排策略；它需要操作系统，提供服务的方式必须明了；它需要语言，语言的使用方针必须明确；然后是实用程序、调试辅助程序、测试用例生成工具和处理文档的字处理系统。接下面我们逐一讨论它们。")]),v._v(" "),p("h2",{attrs:{id:"目标机器"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#目标机器"}},[v._v("#")]),v._v(" 目标机器")]),v._v(" "),p("p",[v._v("机器支持可以有效地划分成目标机器和辅助机器。目标机器是软件所服务的对象，程序必须在该机器上进行最后测试。辅助机器是那些在开发系统中提供服务的机器。如果是在为原有的机型开发操作系统，则该机器不仅充当目标机器的角色，同时也作为辅助机器。")]),v._v(" "),p("p",[v._v("目标机器的类型有哪些？团队开发的监督程序或其他系统核心软件当然需要它们自己的机器。目标机器系统会需要若干操作员和一两个系统编程人员，以保证机器上的标准支持是即时更新和实时可用的。")]),v._v(" "),p("p",[v._v("如果还需要其他的机器，那么将是一件很古怪的东西——运行速度不必非常快，但至少要若干兆字节的主存，百兆字节的在线硬盘和终端。字符型终端即可满足要求，但是它必须比 15 字符/每分的打字机速度要快。大容量内存可以进行进程覆盖（overlay）和功能测试之后的剪裁工作，从而极大地提高生产率。")]),v._v(" "),p("p",[v._v("另外，还需要配备调试机器或者软件。这样，在调试过程中，所有类型的程序参数可以被自动计数和测量。例如，内存使用模式是非常强大的诊断措施，能查出程序中不可思议的行为或者性能意外下降的原因。")]),v._v(" "),p("p",[v._v("计划安排。当目标机器刚刚被研制，或者当它的第一个操作系统被开发时，机器时间是非常匮乏的，时间的调度安排成了主要问题。目标机器时间需求具有特别的增长曲线。在 OS/360 开发中，我们有很好的 System/360 仿真器和其他的辅助设施，并根据以前的经验，我们计划出 System/360 的使用时间（小时数），向制造商提前预定了机器。不过，起初它们日复一日地处于空闲状态。突然有一天，所有 16 个系统全部上线，这时资源配给成了严重问题。实际使用情况如图 12.1 所示。每个人在同一时间，开始调试自己的第一个组件，然后团队大多数成员持续地进行某些调试工作。")]),v._v(" "),p("p",[v._v("我们集中了所有的机器和磁带库，并组建了一个富有经验的专业团队来操作它们。为了最大限度地利用 S/360 的时间，我们在任何系统空闲和可能的时间里，以批处理方式运行所有运算任务。我们尝试了每天运行四次（周转时间为两个半小时），而实际要求的周转时间为四小时。我们使用了一台带有终端的 1401 辅助机器来进行调度，跟踪成千上万的任务，监督时间周期。")]),v._v(" "),p("Figures",{attrs:{figure:"12-1"}},[v._v("目标机器使用的增长曲线")]),v._v(" "),p("p",[v._v("但是整个开发队伍实在是过度运转了。在经过了几个月的缓慢周转、相互指责、极度痛苦之后，我们开始把机器时间分配成连续的块。例如，整个从事排序工作的 15 人小组，会得到系统 4 至 6 小时的使用时间块，由他们自己决定如何使用。即使没有安排，其他人也不能使用机器资源。")]),v._v(" "),p("p",[v._v("这种方式，是一种更好的分配和安排方法。尽管机器的利用程度可能会有些降低（常常不是这样），生产率却提高了。上述小组中的每个人，6 小时中连续 10 次操作的生产率，比间隔 3 小时的 10 次操作要高许多，因为持续的精力集中能减少思考时间。在这样的冲刺之后，提出下一个时间块要求之前，小组通常需要一到两天的时间来从事书面文档工作。并且，通常 3 人左右的小组能卓有成效地安排和共享时间块。在调试新操作系统时，这似乎是一种使用目标机器的最好方法。")]),v._v(" "),p("p",[v._v("上述方法尽管没有在任何理论中被提及，在实际情况中却一直如此。另外，同天文工作者一样，系统调试总是夜班性质的工作。二十年前，当所有机房负责人在家中安睡时，我正工作在 701 上。三代机器过去了，技术完全改变了，操作系统出现了，然而大家喜好的工作方式没有改变。这种工作方式得以延续，是因为它的生产率最高。现在，人们已开始认识到它的生产力，并且敞开地接受这种富有成效的实践。")]),v._v(" "),p("h2",{attrs:{id:"辅助机器和数据服务"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#辅助机器和数据服务"}},[v._v("#")]),v._v(" 辅助机器和数据服务")]),v._v(" "),p("p",[v._v("仿真装置。如果目标机器是新产品，则需要一个目标机器的逻辑仿真装置。这样，在生产出新机器之前，就有辅助的调试平台可供使用。同样重要的是——即使在新机器出现之后，仿真装置仍然可以提供可靠的调试平台。")]),v._v(" "),p("p",[v._v("可靠并不等于精确。在某些方面，仿真机器肯定无法精确地达到与新型机器一致的实现。但是至少在一段时间内，它的实现是稳定的，新硬件就不会。")]),v._v(" "),p("p",[v._v("现在，我们已经习惯于计算机硬件自始至终能正常工作。除非程序开发人员发现相同运算在运行时会产生不一致的结果，否则出错时，他都会被建议去检查自己代码中的错误，而不是去怀疑他的运行平台。")]),v._v(" "),p("p",[v._v("这样的经验，对于支持新型机器的编程工作来说，是不好的。实验室研制和试制的模型产品和早期硬件不会像定义的那样运行，不会稳定工作，甚至每天都不会一样。当一些缺陷被发现时，所有的机器拷贝，包括软件编程小组所使用的，都会发生修改。这种飘忽不定的开发基础实在是够糟的。而硬件失败，通常是间歇性的，导致情况更加恶劣。不确定性是所有情况中最糟糕的，因为它剥夺了开发人员查找 bug 的动力——可能根本就没有问题。所以，一套运行在稳定平台上的可靠仿真装置，提供了远大于我们所期望的功用。")]),v._v(" "),p("p",[v._v("编译器和汇编平台。出于同样的原因，编译器和汇编软件需要运行在可靠的辅助平台上，为目标机器编译目标代码。接着，可以在仿真器上立刻开始后续的调试。")]),v._v(" "),p("p",[v._v("高级语言的编程开发中，在目标机器上开始全面测试目标代码之前，编译器可以在辅助机器上完成很多目标代码的调试和测试工作。这为直接运行提供了支持，而不仅仅是稳定机器上的仿真结果。")]),v._v(" "),p("p",[v._v("程序库和管理。在 OS/360 开发中，一个非常成功的重要辅助机器应用是维护程序库。该系统由 W. R. Crowley 带领开发，连接两台 7010 机器，共享一个很大的磁盘数据库。7010 同时还提供 System/360 汇编程序。所有经过测试或者正在测试的代码都保存在该库中，包括源代码和汇编装载模块。这个库实际上划分成不同访问规则下的子库。")]),v._v(" "),p("p",[v._v("首先，每个组或者编程人员分配了一个区域，用来存放他的程序拷贝、测试用例以及单元测试需要的测试辅助例程和数据。在这个开发库（playpen）中，不存在任何限制开发人员的规定。他可以自由处置自己的程序，他是它们的拥有者。")]),v._v(" "),p("p",[v._v("当开发人员准备将软件单元集成到更大的部分时，他向集成经理提交一份拷贝，后者将拷贝放置在系统集成子库中。此时，原作者不可以再改变代码，除非得到了集成经理的批准。当系统合并在一起时，集成经理开始进行所有的系统测试工作，识别和修补 bug。")]),v._v(" "),p("p",[v._v("有时，系统的一个版本可能会被广泛应用，它被提升到当前版本子库。此时，这个拷贝是不可更改的，除非有重大缺陷。该版本可以用于所有新模块的集成和测试。7010 上的一个程序目录对每个模块的每个版本进行跟踪，包括它的状态、用途和变更。")]),v._v(" "),p("p",[v._v("这有两个重要的理念。首先是受控，即程序的拷贝属于经理，他可以独立地授权程序的变更。其次是使发布的进展变得正式，以及开发库（playpen）与集成、发布的正式分离。")]),v._v(" "),p("p",[v._v("在我看来，这是 OS/360 工作中最优秀的成果之一。它实际上是管理技术的一部分，很多大型的项目都独立地发展了这些技术，包括 Bell 试验室、ICL、剑桥大学等。它同样适用于文档，是一种不可缺少的技术。")]),v._v(" "),p("p",[v._v("编程工具。随着调试技术的出现，旧方法的使用减少了，但并没有消失。因此，还是需要内存转储、源文件编辑、快照转储、甚至跟踪等工具。")]),v._v(" "),p("p",[v._v("与之类似，一整套实用程序同样是必要的，用来实现磁带走带、拷贝磁盘、打印文件、更改目录等工作。如果一开始就任命了项目的工具操作和维护人员，那么这些工作可以一次完成，并且随时处在待命状态。")]),v._v(" "),p("p",[v._v("文档系统。在所有的工具中，最能节省劳动力的，可能是运行在可靠平台上的、计算机化的文本编辑系统。我们有一套使用非常方便的系统，由 J. W. Franklin 发明。没有它，OS/360 手册的进度可能会远远落后，而且更加晦涩难懂。另外，对于 6 英尺的 OS/360 手册，很多人认为它表达的是一大堆口头垃圾，巨大容量带来了新的不理解问题——这种观点有一些道理。")]),v._v(" "),p("p",[v._v("对此，我通过两种途径作出了反应。首先，OS/360 的文档规模是不可避免的，需要制订仔细的阅读计划。如果选择性地阅读，则可以忽略大部分内容和省下大量时间。人们必须把 OS/360 的文档看成是图书馆或者百科全书，而不是一系列强制阅读的文章。")]),v._v(" "),p("p",[v._v('第二，它比那些刻画了大多数编程系统特性的短篇文档更加可取。不过，我也承认，手册仍有某些需要大量改进的地方，经改进后文档篇幅会大大减少。事实上，某些部分（"概念和设施"）已经被很好地改写了。')]),v._v(" "),p("p",[v._v('性能仿真装置。最好有一个。正如我们将在下章讨论到的，彻底地开发一个。使用相同的自顶向下设计方法，来实现性能仿真器、逻辑仿真装置和产品。尽可能早地开始这项工作，仔细地听取"它们表达的意见"。')]),v._v(" "),p("h2",{attrs:{id:"高级语言和交互式编程"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#高级语言和交互式编程"}},[v._v("#")]),v._v(" 高级语言和交互式编程")]),v._v(" "),p("p",[v._v("在十年前的 OS/360 开发中，并没有使用现在最重要的两种系统编程工具。目前，它们也没有得到广泛应用，但是所有证据都证明它们的功效和适用。他们是（1）高级语言和（2）交互式编程。我确信只有懒散和惰性会妨碍它们的广泛应用，技术上的困难很快就不再成为借口。")]),v._v(" "),p("p",[v._v("高级语言。使用高级语言的主要原因是生产率和调试速度。我们在前面已讨论过生产率的问题（第 8 章）。其中，并没有提到大量的数字论据，但是所体现出来的是整体提升，而不仅仅是部分增加。")]),v._v(" "),p("p",[v._v("调试上的改进来自下列事实——存在更少的 bug，而且更容易查找。bug 更少的原因，是因为它避免在错误面前暴露所有级别的工作，这样不但会造成语法上的错误，还会产生语义上的问题，如不当使用寄存器等。编译器的诊断机制可以帮助找出这些类似的错误，更重要的是，它非常容易插入调试的快照。")]),v._v(" "),p("p",[v._v("就我而言，这些生产率和调试方面的优势是势不可挡的。我无法想象使用汇编语言能方便地开发出系统软件。")]),v._v(" "),p("p",[v._v("那么，上述工具的传统反对意见有哪些呢？这里有三点：它无法完成我想做的事情；目标代码过于庞大；目标代码运行速度过慢。")]),v._v(" "),p("p",[v._v("就功能而言，我相信反对不再存在。所有证据都显示了人们可以完成想做的事情，只是需要花费时间和精力找出如何做而已，这可能需要一些讨人嫌的技巧。")]),v._v(" "),p("p",[v._v("就空间而言，新的优化编译器已非常令人满意，并且将持续地改进。")]),v._v(" "),p("p",[v._v("就速度而言，经优化编译器生成的代码，比绝大多数程序员手写代码的效率要高。而且，在前者被全面测试之后，可以将其中的百分之一至五替换成手写的代码，这往往能解决速度方面的问题。")]),v._v(" "),p("p",[v._v("系统编程需要什么样的高级语言呢？现在可供合理选择的语言是 PL/I。它提供完整的功能集；它与操作系统环境相吻合；它有各种各样的编译器，一些是交互式的，一些速度很快，一些诊断性很好，另一些能产生优化程度很高的代码。我自己觉得使用 APL 来解决算法更快一些，然后，将它们翻译成某个系统环境下的 PL/I 语言。")]),v._v(" "),p("p",[v._v("交互式编程。MIT 的 Multics 项目的成果之一，是它对软件编程系统开发的贡献。在那些系统编程所关注的方面，Multics（以及后续系统，IBM 的 TSS）和其他交互式计算机系统在概念上有很大的不同：多个级别上数据和程序的共享和保护，可延伸的库管理，以及协助终端用户共同开发的设施。我确信在某些应用上，批处理系统决不会被交互式系统所取代。但是，我认为 Multics 小组是交互式系统开发上最具有说服力的成功案例。")]),v._v(" "),p("p",[v._v("然而，目前还没有非常明显的证据来证明这些功能强大的工具的效力。正如人们所普遍认识的那样，调试是系统编程中很慢和较困难的部分，而漫长的调试周转时间是调试的祸根。就这一点而言，交互式编程的逻辑合理性是勿庸置疑的。")]),v._v(" "),p("p",[v._v("另外，从很多采用这种方式了开发小型系统和系统某个部分的人那里，我们听到了很多好的证据。我唯一见到的关于大型编程系统开发方面的数字，来自 Bell 实验室 John Harr 的论文。它们如图 12.2 所示。这些数字分别反映了代码编写、汇编装配和程序调试的情况。第一个大部分是控制程序；其他三个则是语言解释、编辑等程序。Harr 的数据表明了系统软件开发中，交互式编程的生产率至少是原来的两倍。")]),v._v(" "),p("Figures",{attrs:{figure:"12-2"}},[v._v("批处理和交互式编程生产率的对比")]),v._v(" "),p("p",[v._v("由于远程键盘终端无法用于内存转储的调试，大多数交互式工具的有效使用需要采用高级语言来进行开发。有了高级语言，可以很容易地修改代码和选择性地打印结果。实际上，它们组成了一对强大的工具。")])],1)}),[],!1,null,null,null);_.default=s.exports}}]);